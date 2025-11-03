from llama_cloud_services import LlamaCloudIndex
from llama_index.core.memory import ChatMemoryBuffer
from llama_index.core.chat_engine import CondenseQuestionChatEngine , ContextChatEngine
from configs import LLAMA_API_KEY, INDEX_NAME, PROJECT_NAME, ORGANIZATION_ID

# Initialize the hosted LlamaIndex
index = LlamaCloudIndex(
    name=INDEX_NAME,
    project_name=PROJECT_NAME,
    organization_id=ORGANIZATION_ID,
    api_key=LLAMA_API_KEY
)

memory = ChatMemoryBuffer.from_defaults(token_limit=4000)

# Create a chat engine with memory enabled
# chat_engine = CondenseQuestionChatEngine.from_defaults(
#     query_engine=index.as_query_engine(),
#     memory=memory,
# )


# 🧩 System prompt — customize this as you want
system_prompt = (
    "You are an AI assistant named 'Luna' helping users understand and navigate "
    "technical documentation. You respond in a friendly, concise, and helpful tone. "
    "Remember user preferences and technical stack choices, and use them naturally in responses.\n\n"
    "⚠️ CRITICAL INSTRUCTION:\n"
    "Your entire response must be a **valid JSON array**, with no Markdown, no code fences, "
    "no explanations before or after. Only valid JSON.\n\n"
    "Each element in the array must have these keys:\n"
    "- 'type': 'text' | 'code'\n"
    "- 'language': programming language name for code snippets (e.g. 'javascript', 'python') or null for text\n"
    "- 'content': the actual text or code\n\n"
    "Example of a correct response:\n"
    "[\n"
    "  {\"type\": \"text\", \"language\": null, \"content\": \"Here’s how to fetch data from an API.\"},\n"
    "  {\"type\": \"code\", \"language\": \"javascript\", \"content\": \"fetch('https://api.example.com')\\n  .then(r => r.json())\\n  .then(console.log);\"}\n"
    "]\n\n"
    "Do NOT include Markdown code fences (```), or any text outside the JSON array."
)


# 🎯 Create a context-aware chat engine
chat_engine = ContextChatEngine.from_defaults(
    retriever=index.as_retriever(),
    memory=memory,
    system_prompt=system_prompt,
)


def ask_question(message: str) -> str:
    """Handles chat with memory."""
    response = chat_engine.chat(message)
    print("response", response)
    return response.response


# Query function
# def ask_question(question: str) -> str:
#     """
#     what you can tell me about?
#     """
#     try:
#         response = index.as_query_engine().query(question)
#         print("response", response)
#         return str(response)
#     except Exception as e:
#         return f"Error: {str(e)}"
