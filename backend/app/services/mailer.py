import logging
import smtplib
from email.message import EmailMessage

from app.schemas import ContactMessageIn
from app.settings import AppSettings

logger = logging.getLogger(__name__)


def send_contact_email(settings: AppSettings, payload: ContactMessageIn) -> None:
    subject = f"Portfolio Contact: {payload.name}"
    body = (
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n\n"
        f"Message:\n{payload.message}\n"
    )

    if settings.mail_provider.lower() == "smtp":
        message = EmailMessage()
        message["Subject"] = subject
        message["From"] = settings.smtp_username or settings.contact_receiver_email
        message["To"] = settings.contact_receiver_email
        message.set_content(body)

        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=20) as client:
            if settings.smtp_use_tls:
                client.starttls()
            if settings.smtp_username and settings.smtp_password:
                client.login(settings.smtp_username, settings.smtp_password)
            client.send_message(message)
        return

    logger.info("Contact message received | subject=%s | body=%s", subject, body)
