from back_end.database.connection import get_connection


def insert_reply(comment_id: int, user_id: int, content: str):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO comment_replies (comment_id, user_id, content)
        VALUES (%s, %s, %s)
        RETURNING id, comment_id, user_id, content, created_at
    """, (comment_id, user_id, content))

    reply = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return {
        "id": reply[0],
        "comment_id": reply[1],
        "user_id": reply[2],
        "content": reply[3],
        "created_at": reply[4]
    }


def get_replies_by_comment(comment_id: int):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            comment_replies.id,
            comment_replies.comment_id,
            comment_replies.user_id,
            users.username,
            comment_replies.content,
            comment_replies.created_at
        FROM comment_replies
        INNER JOIN users
            ON comment_replies.user_id = users.id
        WHERE comment_replies.comment_id = %s
        ORDER BY comment_replies.created_at ASC
    """, (comment_id,))

    replies = cur.fetchall()

    cur.close()
    conn.close()

    return [
        {
            "id": reply[0],
            "comment_id": reply[1],
            "user_id": reply[2],
            "username": reply[3],
            "content": reply[4],
            "created_at": reply[5]
        }
        for reply in replies
    ]


def delete_reply(reply_id: int, user_id: int):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        DELETE FROM comment_replies
        WHERE id = %s AND user_id = %s
        RETURNING id
    """, (reply_id, user_id))

    deleted = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return deleted is not None