"""Pydantic schemas for the ArtisanMart API."""
from typing import Optional

from pydantic import BaseModel, EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None


class UserCreate(UserBase):
    password: str
    role: Optional[str] = "buyer"


class User(UserBase):
    id: int
    is_active: bool = True
    role: str = "buyer"

    class Config:
        orm_mode = True
