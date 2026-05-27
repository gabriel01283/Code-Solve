from fastapi import FastAPI
from pydantic import BaseModel
from database.connection import get_connection

app = FastAPI()

class Pesquisa(BaseModel):
    pesquisa: str

@app.post("/save-search")
def save_search(data: Pesquisa):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO recently_search_AI (pesquisa)
        VALUES (%s)
    """, (data.pesquisa,))

    conn.commit()
    cursor.close()
    conn.close()

    return {"ok": True}