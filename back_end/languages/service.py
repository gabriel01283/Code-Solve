from back_end.languages.queries import (
    insert_language,
    get_all_languages,
    get_language_by_id,
    delete_language
)


def create_language(name: str, description: str):
    if not name.strip():
        return {
            "success": False,
            "error": "language name is required"
        }

    if not description.strip():
        return {
            "success": False,
            "error": "language description is required"
        }

    try:
        language = insert_language(
            name.strip(),
            description.strip()
        )

        return {
            "success": True,
            "language": language
        }

    except Exception as error:
        if "duplicate key" in str(error):
            return {
                "success": False,
                "error": "language already exists"
            }

        return {
            "success": False,
            "error": str(error)
        }


def list_languages():
    return get_all_languages()


def find_language(language_id: int):
    language = get_language_by_id(language_id)

    if not language:
        return {
            "success": False,
            "error": "language not found"
        }

    return {
        "success": True,
        "language": language
    }


def remove_language(language_id: int):
    deleted = delete_language(language_id)

    if not deleted:
        return {
            "success": False,
            "error": "language not found"
        }

    return {
        "success": True,
        "message": "language deleted"
    }