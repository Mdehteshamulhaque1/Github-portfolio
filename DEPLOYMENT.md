# Deployment Guide

## Frontend (Vercel)

1. Push repository to GitHub.
2. Import project in Vercel.
3. Framework preset: Vite.
4. Build command: npm run build
5. Output directory: dist
6. Add environment variables from .env.example.

The vercel.json file already handles SPA rewrites.

## Frontend (Netlify)

1. New site from Git.
2. Build command: npm run build
3. Publish directory: dist
4. Add environment variables from .env.example.

The netlify.toml file already handles SPA rewrites.

## Backend (Render)

Option A: Blueprint deploy
1. Connect repository to Render.
2. Choose Blueprint and select render.yaml.
3. Add secret env vars in Render dashboard:
   - CORS_ALLOWED_ORIGINS
   - CONTACT_RECEIVER_EMAIL
   - SMTP_HOST
   - SMTP_PORT
   - SMTP_USERNAME
   - SMTP_PASSWORD

Option B: Manual web service
1. Runtime: Docker
2. Root directory: backend
3. Health check path: /api/health
4. Port: 8000

## End-to-End Production Wiring

1. Deploy backend first and copy public URL.
2. Set frontend VITE_CONTACT_API_URL to backend-url/api/contact.
3. Redeploy frontend.
4. Verify by submitting contact form in production.
