from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llama_indexer import ask_question


app = FastAPI(title="Hosted LlamaIndex Chatbot Microservice")

# --- CORS setup ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or specify ["https://your-saas.com"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class Question(BaseModel):
    question: str

# Health check
@app.get("/")
def root():
    return {"message": "Hosted LlamaIndex Microservice is running!"}

# Ask endpoint
@app.post("/chat")
def ask(q: Question):
    answer = ask_question(q.question)
    return {"answer": answer}
