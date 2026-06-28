from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
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

from back_end.comments.service import (
    create_comment,
    list_comments,
    remove_comment
)

from back_end.languages.service import (
    create_language,
    list_languages,
    find_language,
    remove_language,
    populate_languages
)

from back_end.interests.service import (
    add_interest,
    list_user_interests,
    remove_interest
)

from back_end.comment_replies.service import (
    create_reply,
    list_replies,
    remove_reply
)


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


# -------- SCHEMAS --------
class UserRegister(BaseModel):
    username: str
    email: str
    password: str


class LoginData(BaseModel):
    email: str
    password: str


class CommentCreate(BaseModel):
    content: str


class LanguageCreate(BaseModel):
    name: str
    description: str
    category: str


class ReplyCreate(BaseModel):
    content: str


# -------- REGISTER --------
@app.post("/register")
def register(user: UserRegister):

    if not user.username.strip():
        return {"error": "username is required"}

    if not user.email.strip():
        return {"error": "email is required"}

    if not user.password.strip():
        return {"error": "password is required"}

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


# -------- CREATE COMMENT --------
@app.post("/comments")
def create_new_comment(
    comment: CommentCreate,
    user_id: int = Depends(get_current_user)
):

    result = create_comment(
        user_id,
        comment.content
    )

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": "comment created",
        "comment": result["comment"]
    }


# -------- LIST COMMENTS --------
@app.get("/comments")
def get_comments():

    comments = list_comments()

    return {
        "comments": comments
    }


# -------- DELETE COMMENT --------
@app.delete("/comments/{comment_id}")
def delete_existing_comment(
    comment_id: int,
    user_id: int = Depends(get_current_user)
):

    result = remove_comment(
        comment_id,
        user_id
    )

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": result["message"]
    }


# -------- CREATE LANGUAGE --------
@app.post("/languages")
def create_new_language(
    language: LanguageCreate,
    user_id: int = Depends(get_current_user)
):

    result = create_language(
        language.name,
        language.description,
        language.category
    )

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": "language created",
        "language": result["language"]
    }


# -------- LIST LANGUAGES --------
@app.get("/languages")
def get_languages():

    languages = list_languages()

    return {
        "languages": languages
    }


# -------- SEED LANGUAGES --------
@app.post("/languages/seed")
def seed_default_languages(
    user_id: int = Depends(get_current_user)
):

    result = populate_languages()

    return {
        "message": "languages seeded",
        "created_count": result["created_count"],
        "created_items": result["created_items"]
    }


# -------- GET LANGUAGE BY ID --------
@app.get("/languages/{language_id}")
def get_language(language_id: int):

    result = find_language(language_id)

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "language": result["language"]
    }


# -------- DELETE LANGUAGE --------
@app.delete("/languages/{language_id}")
def delete_existing_language(
    language_id: int,
    user_id: int = Depends(get_current_user)
):

    result = remove_language(language_id)

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": result["message"]
    }


# -------- ADD INTEREST --------
@app.post("/interests/{language_id}")
def add_new_interest(
    language_id: int,
    user_id: int = Depends(get_current_user)
):

    result = add_interest(
        user_id,
        language_id
    )

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": "interest added",
        "interest": result["interest"]
    }


# -------- LIST USER INTERESTS --------
@app.get("/perfil/interests")
def get_user_interests(
    user_id: int = Depends(get_current_user)
):

    interests = list_user_interests(user_id)

    return {
        "interests": interests
    }


# -------- DELETE INTEREST --------
@app.delete("/interests/{language_id}")
def delete_user_interest(
    language_id: int,
    user_id: int = Depends(get_current_user)
):

    result = remove_interest(
        user_id,
        language_id
    )

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": result["message"]
    }


# -------- CREATE REPLY --------
@app.post("/comments/{comment_id}/replies")
def create_new_reply(
    comment_id: int,
    reply: ReplyCreate,
    user_id: int = Depends(get_current_user)
):

    result = create_reply(
        comment_id,
        user_id,
        reply.content
    )

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": "reply created",
        "reply": result["reply"]
    }


# -------- LIST COMMENT REPLIES --------
@app.get("/comments/{comment_id}/replies")
def get_comment_replies(comment_id: int):

    replies = list_replies(comment_id)

    return {
        "replies": replies
    }


# -------- DELETE REPLY --------
@app.delete("/replies/{reply_id}")
def delete_existing_reply(
    reply_id: int,
    user_id: int = Depends(get_current_user)
):

    result = remove_reply(
        reply_id,
        user_id
    )

    if not result["success"]:
        return {
            "error": result["error"]
        }

    return {
        "message": result["message"]
    }