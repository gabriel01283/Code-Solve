from back_end.database.connection import get_connection
from back_end.usuarios.security import hash_password, verify_password


# -------- REGISTER --------
def create_user(username: str, email: str, password: str):

    conn = get_connection()
    cur = conn.cursor()

    # Verifica username
    cur.execute(
        "SELECT id FROM users WHERE username = %s",
        (username,)
    )

    if cur.fetchone():
        cur.close()
        conn.close()

        return {
            "success": False,
            "error": "username already exists"
        }

    # Verifica email
    cur.execute(
        "SELECT id FROM users WHERE email = %s",
        (email,)
    )

    if cur.fetchone():
        cur.close()
        conn.close()

        return {
            "success": False,
            "error": "email already exists"
        }

    password_hash = hash_password(password)

    cur.execute("""
        INSERT INTO users (username, email, password_hash)
        VALUES (%s, %s, %s)
    """, (username, email, password_hash))

    conn.commit()

    cur.close()
    conn.close()

    return {
        "success": True
    }


# -------- GET USER BY EMAIL --------
def get_user_by_email(email: str):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT id, username, email, password_hash
        FROM users
        WHERE email = %s
    """, (email,))

    user = cur.fetchone()

    cur.close()
    conn.close()

    return user


# -------- GET USER BY ID --------
def get_user_by_id(user_id: int):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT id, username, email
        FROM users
        WHERE id = %s
    """, (user_id,))

    user = cur.fetchone()

    cur.close()
    conn.close()

    return user


# -------- LOGIN LOGIC --------
def login_user(email: str, password: str):
    user = get_user_by_email(email)

    if not user:
        return None

    user_id, username, email_db, password_hash = user

    if not verify_password(password, password_hash):
        return None

    return {
        "id": user_id,
        "username": username,
        "email": email_db
    }