"""
ArtisanMart API - FastAPI Backend
A comprehensive marketplace API for handcrafted goods
"""

from fastapi import FastAPI, Depends, HTTPException, status, UploadFile, File
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
import uvicorn
import os
from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, Field, EmailStr
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="ArtisanMart API",
    description="Marketplace API for handcrafted goods with AI recommendations",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()

# Mock database (replace with real DB)
class MockDB:
    def __init__(self):
        self.users = {}
        self.products = {}
        self.orders = {}
    
    async def user_exists(self, email: str) -> bool:
        return email in self.users
    
    async def create_user(self, user_data: dict) -> dict:
        user_id = f"user_{len(self.users) + 1}"
        user_data['id'] = user_id
        user_data['created_at'] = datetime.utcnow().isoformat()
        self.users[user_data['email']] = user_data
        return user_data

db = MockDB()

# Models
class UserCreate(BaseModel):
    email: EmailStr
    full_name: str
    password: str
    phone: Optional[str] = None

class ProductCreate(BaseModel):
    title: str = Field(..., max_length=200)
    description: str
    price: float = Field(..., gt=0)
    artisan_id: str
    category: str
    images: List[str] = []

class OrderCreate(BaseModel):
    product_id: str
    quantity: int = Field(..., gt=0)
    shipping_address: dict

# Mock authentication
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    # In real app: verify JWT with Auth0/OAuth
    if token == "mock-token":
        return {"id": "user_1", "email": "test@example.com", "role": "buyer"}
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials"
    )

# Health check
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "artisanmart-api",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0"
    }

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to ArtisanMart API", "version": "1.0.0"}

# User endpoints
@app.post("/api/v1/users/register")
async def register_user(user: UserCreate):
    if await db.user_exists(user.email):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered"
        )
    
    new_user = await db.create_user(user.dict())
    return {"id": new_user['id'], "email": new_user['email']}

@app.get("/api/v1/users/me", dependencies=[Depends(get_current_user)])
async def get_current_user_endpoint(current_user: dict = Depends(get_current_user)):
    return current_user

# Product endpoints
@app.post("/api/v1/products")
async def create_product(product: ProductCreate):
    return {"id": f"product_{len(db.products) + 1}", **product.dict()}

@app.get("/api/v1/products")
async def list_products(skip: int = 0, limit: int = 20):
    # Add search, filtering, sorting later
    return {
        "products": list(db.products.values())[skip:skip+limit],
        "total": len(db.products)
    }

# Order endpoints
@app.post("/api/v1/orders")
async def create_order(order: OrderCreate):
    order_id = f"order_{len(db.orders) + 1}"
    return {"id": order_id, "status": "pending", **order.dict()}

# Error handler
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=422,
        content={"detail": exc.errors(), "body": exc.body}
    )

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
