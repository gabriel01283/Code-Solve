from back_end.comment_replies.queries import (
    insert_reply,
    get_replies_by_comment,
    delete_reply
)


def create_reply(comment_id: int, user_id: int, content: str):
    if not content.strip():
        return {
            "success": False,
            "error": "reply content is required"
        }

    try:
        reply = insert_reply(
            comment_id,
            user_id,
            content.strip()
        )

        return {
            "success": True,
            "reply": reply
        }

    except Exception as error:
        if "foreign key" in str(error):
            return {
                "success": False,
                "error": "comment not found"
            }

        return {
            "success": False,
            "error": str(error)
        }


def list_replies(comment_id: int):
    return get_replies_by_comment(comment_id)


def remove_reply(reply_id: int, user_id: int):
    deleted = delete_reply(
        reply_id,
        user_id
    )

    if not deleted:
        return {
            "success": False,
            "error": "reply not found or permission denied"
        }

    return {
        "success": True,
        "message": "reply deleted"
    }