# FastAPI Contact Backend

This backend powers the contact form endpoint used by the portfolio frontend.

## Endpoints

- GET /api/health
- POST /api/contact

## Local Setup

1. Create and activate a virtual environment.
2. Install dependencies:

pip install -r requirements.txt

3. Create env file:

copy .env.example .env

4. Start server:

uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

## Contact Delivery Modes

- MAIL_PROVIDER=log
  - Safe local development mode.
  - Messages are written to server logs.

- MAIL_PROVIDER=smtp
  - Requires SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD.
  - Sends real emails to CONTACT_RECEIVER_EMAIL.

## Security and Reliability

- Honeypot field support to drop obvious bot submissions.
- IP-based sliding-window rate limit for /api/contact.
- Configurable rate limit values via env:
  - CONTACT_RATE_LIMIT_WINDOW_SECONDS
  - CONTACT_RATE_LIMIT_MAX_REQUESTS

## Frontend Integration

Set frontend env variable:

VITE_CONTACT_API_URL=http://localhost:8000/api/contact
