import os
from dotenv import load_dotenv

load_dotenv()
# Llama Cloud Index configuration
LLAMA_API_KEY = os.getenv("LLAMA_API_KEY")
INDEX_NAME = os.getenv("INDEX_NAME")
PROJECT_NAME = os.getenv("PROJECT_NAME")
ORGANIZATION_ID = os.getenv("ORG_ID")