from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from back_end.database.init_db import create_tables
from back_end.usuarios.service import create_user, login_user, get_user_by_id
from back_end.auth.jwt import create_access_token, create_refresh_token
from back_end.auth.dependencies import get_current_user


app = FastAPI()


# -------- CORS --------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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

    # Campos vazios
    if not user.username.strip():
        return {"error": "username is required"}

    if not user.email.strip():
        return {"error": "email is required"}

    if not user.password.strip():
        return {"error": "password is required"}

    # Domínios permitidos
    allowed_domains = [
        "gmail.com",
        "yahoo.com",
        "email.com"
    ]

    email_domain = user.email.split("@")[-1].lower()

    if email_domain not in allowed_domains:
        return {
            "error": "email domain not allowed"
        }

    result = create_user(
        user.username,
        user.email,
        user.password
    )

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": "user created"
    }


# -------- LOGIN --------
class LoginData(BaseModel):
    email: str
    password: str


@app.post("/login")
def login(data: LoginData):

    user = login_user(
        data.email,
        data.password
    )

    if not user:
        return {
            "error": "invalid credentials"
        }

    payload = {
        "user_id": user["id"],
        "email": user["email"]
    }

    access_token = create_access_token(payload)
    refresh_token = create_refresh_token(payload)

    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }


# -------- PERFIL --------
@app.get("/perfil")
def perfil(user_id: int = Depends(get_current_user)):

    user = get_user_by_id(user_id)

    if not user:
        return {
            "error": "user not found"
        }

    return {
        "id": user[0],
        "username": user[1],
        "email": user[2]
    }