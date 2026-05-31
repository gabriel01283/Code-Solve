from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer
from back_end.auth.jwt_bearer import verify_token

auth_scheme = HTTPBearer()


def get_current_user(credentials=Depends(auth_scheme)):
    token = credentials.credentials
    payload = verify_token(token)

    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")

    return payload