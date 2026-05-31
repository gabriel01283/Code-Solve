from fastapi import FastAPI, Depends
from pydantic import BaseModel

from back_end.database.init_db import create_tables
from back_end.usuarios.service import (
    create_user,
    login_user,
    get_user_by_id
)
from back_end.auth.jwt import (
    create_access_token,
    create_refresh_token
)
from back_end.auth.dependencies import get_current_user
from jose import jwt, JWTError
import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"

app = FastAPI()


# -------- STARTUP --------
@app.on_event("startup")
def startup():
    create_tables()


# -------- REGISTER --------
class UserRegister(BaseModel):
    username: str
    email: str
    password: str


@app.post("/register")
def register(user: UserRegister):
    create_user(user.username, user.email, user.password)
    return {"message": "user created"}


# -------- LOGIN --------
class LoginData(BaseModel):
    email: str
    password: str


@app.post("/login")
def login(data: LoginData):
    user = login_user(data.email, data.password)

    if not user:
        return {"error": "invalid credentials"}

    access_token = create_access_token(
        data={
            "user_id": user["id"],
            "email": user["email"]
        }
    )

    refresh_token = create_refresh_token(
        data={
            "user_id": user["id"]
        }
    )

    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }


# -------- REFRESH TOKEN --------
class RefreshData(BaseModel):
    refresh_token: str


@app.post("/refresh")
def refresh(data: RefreshData):
    try:
        payload = jwt.decode(
            data.refresh_token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        new_token = create_access_token(
            data={
                "user_id": payload["user_id"]
            }
        )

        return {
            "access_token": new_token,
            "token_type": "bearer"
        }

    except JWTError:
        return {"error": "invalid refresh token"}


# -------- LOGOUT --------
@app.post("/logout")
def logout():
    return {"message": "logout realizado. apague o token no cliente."}


# -------- PERFIL PROTEGIDO --------
@app.get("/perfil")
def perfil(user=Depends(get_current_user)):
    user_id = user.get("user_id")

    user_db = get_user_by_id(user_id)

    if not user_db:
        return {"error": "user not found"}

    id, username, email = user_db

    return {
        "id": id,
        "username": username,
        "email": email
    }