from back_end.database.connection import get_connection


def insert_comment(user_id: int, content: str):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO comments (user_id, content)
        VALUES (%s, %s)
        RETURNING id, user_id, content, created_at
    """, (user_id, content))

    comment = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return {
        "id": comment[0],
        "user_id": comment[1],
        "content": comment[2],
        "created_at": comment[3]
    }


def get_all_comments():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT 
            comments.id,
            comments.user_id,
            users.username,
            comments.content,
            comments.created_at
        FROM comments
        INNER JOIN users ON comments.user_id = users.id
        ORDER BY comments.created_at DESC
    """)

    comments = cur.fetchall()

    cur.close()
    conn.close()

    return [
        {
            "id": comment[0],
            "user_id": comment[1],
            "username": comment[2],
            "content": comment[3],
            "created_at": comment[4]
        }
        for comment in comments
    ]


def delete_comment(comment_id: int, user_id: int):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        DELETE FROM comments
        WHERE id = %s AND user_id = %s
        RETURNING id
    """, (comment_id, user_id))

    deleted = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return deleted is not None