from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class ContactMessageIn(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    message: str = Field(min_length=10, max_length=4000)
    website: Optional[str] = Field(default='', max_length=120)
    submitted_at: Optional[datetime] = Field(default=None, alias='submittedAt')


class ContactMessageOut(BaseModel):
    status: str
    detail: str
