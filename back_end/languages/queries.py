from back_end.database.connection import get_connection


def insert_language(name: str, description: str, category: str):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO languages (name, description, category)
        VALUES (%s, %s, %s)
        RETURNING id, name, description, category, created_at
    """, (name, description, category))

    language = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return {
        "id": language[0],
        "name": language[1],
        "description": language[2],
        "category": language[3],
        "created_at": language[4]
    }


def get_all_languages():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT id, name, description, category, created_at
        FROM languages
        ORDER BY category ASC, name ASC
    """)

    languages = cur.fetchall()

    cur.close()
    conn.close()

    return [
        {
            "id": language[0],
            "name": language[1],
            "description": language[2],
            "category": language[3],
            "created_at": language[4]
        }
        for language in languages
    ]


def get_language_by_id(language_id: int):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT id, name, description, category, created_at
        FROM languages
        WHERE id = %s
    """, (language_id,))

    language = cur.fetchone()

    cur.close()
    conn.close()

    if not language:
        return None

    return {
        "id": language[0],
        "name": language[1],
        "description": language[2],
        "category": language[3],
        "created_at": language[4]
    }


def delete_language(language_id: int):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        DELETE FROM languages
        WHERE id = %s
        RETURNING id
    """, (language_id,))

    deleted = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return deleted is not None

def seed_languages(items):
    conn = get_connection()
    cur = conn.cursor()

    created_items = []

    for item in items:
        cur.execute("""
            INSERT INTO languages (name, description, category)
            VALUES (%s, %s, %s)
            ON CONFLICT (name) DO NOTHING
            RETURNING id, name, description, category, created_at
        """, (
            item["name"],
            item["description"],
            item["category"]
        ))

        created = cur.fetchone()

        if created:
            created_items.append({
                "id": created[0],
                "name": created[1],
                "description": created[2],
                "category": created[3],
                "created_at": created[4]
            })

    conn.commit()
    cur.close()
    conn.close()

    return created_items