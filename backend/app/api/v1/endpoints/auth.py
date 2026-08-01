from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import os

from app.core.security import (
    authenticate_user,
    create_access_token,
    get_password_hash,
)
from app.db.base import get_db
from app.models.user import User
from app.schemas.token import Token
from app.schemas.user import UserCreate, User as UserSchema

router = APIRouter()

# JWT Settings
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-here")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

@router.post("/register", response_model=UserSchema)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    """Register a new user."""
    # Check if user already exists
    user = db.query(User).filter(User.email == user_in.email).first()
    if user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered",
        )
    
    # Create new user
    user = User(
        email=user_in.email,
        hashed_password=get_password_hash(user_in.password),
        full_name=user_in.full_name,
        role=user_in.role or "buyer",
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

@Rest of the content was cut off due to length constraints. Let me continue with the implementation
<tool_call>
<function=Bash>
<parameter=command>
cat > /home/matheus/ArtisanMart/backend/app/api/v1/endpoints/auth.py << 'EOF'
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import os

from app.core.security import (
    authenticate_user,
    create_access_token,
    get_password_hash,
)
from app.db.base import get_db
from app.models.user import User
from app.schemas.token import Token
from app.schemas.user import UserCreate, User as UserSchema

router = APIRouter()

# JWT Settings
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-here")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

@router.post("/register", response_model=UserSchema)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    """Register a new user."""
    # Check if user already exists
    user = db.query(User).filter(User.email == user_in.email).first()
    if user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered",
        )
    
    # Create new user
    user = User(
        email=user_in.email,
        hashed_password=get_password_hash(user_in.password),
        full_name=user_in.full_name,
        role=user_in.role or "buyer",
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

@router.post("/token", response_model=Token)
def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    """OAuth2 compatible token login, get an access token for future requests."""
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/users/me", response_model=UserSchema)
def read_users_me(current_user: User = Depends(get_current_active_user)):
    """Get current user."""
    return current_user

def get_current_user(
    token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)
):
    """Get current user from token."""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = get_user_by_email(db, email=email)
    if user is None:
        raise credentials_exception
    return user

def get_current_active_user(
    current_user: User = Depends(get_current_user),
):
    """Get current active user."""
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user
