from back_end.database.connection import get_connection


def insert_report(user_id: int, comment_id: int, reason: str):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO reports (user_id, comment_id, reason)
        VALUES (%s, %s, %s)
        RETURNING id, user_id, comment_id, reason, created_at
    """, (user_id, comment_id, reason))

    report = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return {
        "id": report[0],
        "user_id": report[1],
        "comment_id": report[2],
        "reason": report[3],
        "created_at": report[4]
    }


def get_reports():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            reports.id,
            reports.user_id,
            users.username,
            reports.comment_id,
            reports.reason,
            reports.created_at
        FROM reports
        INNER JOIN users
            ON reports.user_id = users.id
        ORDER BY reports.created_at DESC
    """)

    reports = cur.fetchall()

    cur.close()
    conn.close()

    return [
        {
            "id": report[0],
            "user_id": report[1],
            "username": report[2],
            "comment_id": report[3],
            "reason": report[4],
            "created_at": report[5]
        }
        for report in reports
    ]


def delete_report(report_id: int):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        DELETE FROM reports
        WHERE id = %s
        RETURNING id
    """, (report_id,))

    deleted = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return deleted is not None