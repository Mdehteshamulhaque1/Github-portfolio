from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class AppSettings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    app_name: str = Field(default="Portfolio Contact API", alias="APP_NAME")
    app_env: str = Field(default="development", alias="APP_ENV")
    app_host: str = Field(default="0.0.0.0", alias="APP_HOST")
    app_port: int = Field(default=8000, alias="APP_PORT")

    cors_allowed_origins: str = Field(
        default="http://localhost:5173", alias="CORS_ALLOWED_ORIGINS"
    )

    contact_receiver_email: str = Field(
        default="your.email@example.com", alias="CONTACT_RECEIVER_EMAIL"
    )

    mail_provider: str = Field(default="log", alias="MAIL_PROVIDER")
    smtp_host: str = Field(default="smtp.gmail.com", alias="SMTP_HOST")
    smtp_port: int = Field(default=587, alias="SMTP_PORT")
    smtp_username: str = Field(default="", alias="SMTP_USERNAME")
    smtp_password: str = Field(default="", alias="SMTP_PASSWORD")
    smtp_use_tls: bool = Field(default=True, alias="SMTP_USE_TLS")

    contact_rate_limit_window_seconds: int = Field(
        default=60, alias="CONTACT_RATE_LIMIT_WINDOW_SECONDS"
    )
    contact_rate_limit_max_requests: int = Field(
        default=5, alias="CONTACT_RATE_LIMIT_MAX_REQUESTS"
    )

    @property
    def cors_origins(self) -> list[str]:
        return [origin.strip() for origin in self.cors_allowed_origins.split(",") if origin.strip()]


@lru_cache(maxsize=1)
def get_settings() -> AppSettings:
    return AppSettings()
