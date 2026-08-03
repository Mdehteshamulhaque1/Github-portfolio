from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pathlib import Path

from app.rate_limit import SlidingWindowLimiter
from app.schemas import ContactMessageIn, ContactMessageOut
from app.services.mailer import send_contact_email
from app.settings import get_settings

settings = get_settings()

app = FastAPI(title=settings.app_name)

rate_limiter = SlidingWindowLimiter(
    max_requests=settings.contact_rate_limit_max_requests,
    window_seconds=settings.contact_rate_limit_window_seconds,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=False,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health_check() -> dict[str, str]:
    return {"status": "ok", "environment": settings.app_env}


@app.post("/api/contact", response_model=ContactMessageOut)
def submit_contact(request: Request, payload: ContactMessageIn) -> ContactMessageOut:
    if payload.website:
        return ContactMessageOut(status="success", detail="Message received")

    client_ip = request.client.host if request.client else "unknown"
    if not rate_limiter.allow(client_ip):
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many requests. Please try again shortly.",
        )

    try:
        send_contact_email(settings, payload)
        return ContactMessageOut(status="success", detail="Message received")
    except Exception as exc:  # Defensive error mapping for API consumers.
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to process message right now",
        ) from exc


# Serve frontend build (Vite) as static files and provide SPA fallback.
# We intentionally place this after API routes so `/api/...` handlers keep
# taking precedence. The frontend build directory is expected at the
# project root `dist` produced by `npm run build`.
_PROJECT_ROOT = Path(__file__).resolve().parents[2]
_DIST_DIR = _PROJECT_ROOT / "dist"


@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    # Do not interfere with API routes.
    if full_path.startswith("api"):
        raise HTTPException(status_code=404, detail="Not Found")

    # Try to serve the requested file from the dist directory.
    candidate = _DIST_DIR / full_path
    if candidate.exists() and candidate.is_file():
        return FileResponse(candidate)

    # Fallback to index.html for SPA routes.
    index_file = _DIST_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)

    raise HTTPException(status_code=404, detail="Frontend build not found")
