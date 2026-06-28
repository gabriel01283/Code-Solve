from back_end.database.connection import get_connection


def create_tables():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(120) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT fk_user
            FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS languages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(80) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(80) NOT NULL DEFAULT 'Linguagem',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)

    cur.execute("""
    ALTER TABLE languages
    ADD COLUMN IF NOT EXISTS category VARCHAR(80) NOT NULL DEFAULT 'Linguagem';
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS interests (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        language_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT fk_interest_user
            FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE,

        CONSTRAINT fk_interest_language
            FOREIGN KEY (language_id)
            REFERENCES languages(id)
            ON DELETE CASCADE,

        CONSTRAINT unique_user_interest
            UNIQUE (user_id, language_id)
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS comment_replies (
        id SERIAL PRIMARY KEY,
        comment_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT fk_reply_comment
            FOREIGN KEY (comment_id)
            REFERENCES comments(id)
            ON DELETE CASCADE,

        CONSTRAINT fk_reply_user
            FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
    );
    """)

    conn.commit()
    cur.close()
    conn.close()