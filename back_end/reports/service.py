from back_end.reports.queries import (
    insert_report,
    get_reports,
    delete_report
)


def create_report(user_id: int, comment_id: int, reason: str):
    if not reason.strip():
        return {
            "success": False,
            "error": "report reason is required"
        }

    try:
        report = insert_report(
            user_id,
            comment_id,
            reason.strip()
        )

        return {
            "success": True,
            "report": report
        }

    except Exception as error:
        error_message = str(error).lower()

        if "unique_report" in error_message:
            return {
                "success": False,
                "error": "you already reported this comment"
            }

        if "foreign key" in error_message:
            return {
                "success": False,
                "error": "comment not found"
            }

        return {
            "success": False,
            "error": str(error)
        }


def list_reports():
    return get_reports()


def remove_report(report_id: int):
    deleted = delete_report(report_id)

    if not deleted:
        return {
            "success": False,
            "error": "report not found"
        }

    return {
        "success": True,
        "message": "report deleted"
    }