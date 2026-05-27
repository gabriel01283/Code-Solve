import os
import google.generativeai as genai
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(api_key=os.getenv("AIzaSyAlaDLjavc-Ms6RfSCeJOBrcy7tkqYINMQ"))

model = genai.GenerativeModel("gemini-1.5-flash")

class Mensagem(BaseModel):
    texto: str


@app.post("/chat")
def chat(msg: Mensagem):
    
    response = model.generate_content(msg.texto)

    return {
        "resposta": response.text
    }