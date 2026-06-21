from back_end.comments.queries import (
    insert_comment,
    get_all_comments,
    delete_comment
)


def create_comment(user_id: int, content: str):
    if not content.strip():
        return {
            "success": False,
            "error": "comment content is required"
        }

    comment = insert_comment(user_id, content.strip())

    return {
        "success": True,
        "comment": comment
    }


def list_comments():
    return get_all_comments()


def remove_comment(comment_id: int, user_id: int):
    deleted = delete_comment(comment_id, user_id)

    if not deleted:
        return {
            "success": False,
            "error": "comment not found or permission denied"
        }

    return {
        "success": True,
        "message": "comment deleted"
    }