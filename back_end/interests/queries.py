from back_end.database.connection import get_connection


def insert_interest(user_id, language_id):
    conn = get_connection()
    cur = conn.cursor()

    try:
        cur.execute("""
        INSERT INTO interests (user_id, language_id)
        VALUES (%s, %s)
        RETURNING id, user_id, language_id, created_at;
        """, (user_id, language_id))

        interest = cur.fetchone()
        conn.commit()

        return {
            "success": True,
            "interest": interest
        }

    except Exception as error:
        conn.rollback()

        return {
            "success": False,
            "error": str(error)
        }

    finally:
        cur.close()
        conn.close()


def select_user_interests(user_id):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
    SELECT
        interests.id,
        languages.id,
        languages.name,
        languages.description,
        interests.created_at
    FROM interests
    INNER JOIN languages
        ON interests.language_id = languages.id
    WHERE interests.user_id = %s
    ORDER BY interests.created_at DESC;
    """, (user_id,))

    interests = cur.fetchall()

    cur.close()
    conn.close()

    return interests


def delete_interest(user_id, language_id):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
    DELETE FROM interests
    WHERE user_id = %s AND language_id = %s
    RETURNING id;
    """, (user_id, language_id))

    deleted = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()

    return deleted