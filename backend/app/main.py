from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware

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
