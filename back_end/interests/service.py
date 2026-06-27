from back_end.interests.queries import (
    insert_interest,
    select_user_interests,
    delete_interest
)


def add_interest(user_id, language_id):
    result = insert_interest(user_id, language_id)

    if not result["success"]:
        if "duplicate key" in result["error"]:
            return {
                "success": False,
                "error": "interest already added"
            }

        return {
            "success": False,
            "error": result["error"]
        }

    interest = result["interest"]

    return {
        "success": True,
        "interest": {
            "id": interest[0],
            "user_id": interest[1],
            "language_id": interest[2],
            "created_at": interest[3]
        }
    }


def list_user_interests(user_id):
    interests = select_user_interests(user_id)

    return [
        {
            "id": interest[0],
            "language_id": interest[1],
            "name": interest[2],
            "description": interest[3],
            "created_at": interest[4]
        }
        for interest in interests
    ]


def remove_interest(user_id, language_id):
    deleted = delete_interest(user_id, language_id)

    if not deleted:
        return {
            "success": False,
            "error": "interest not found"
        }

    return {
        "success": True,
        "message": "interest removed"
    }