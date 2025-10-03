import os, json, requests
from dotenv import load_dotenv
from tools import TOOLS

load_dotenv()
OPENROUTER_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

def generate_reply(message, memory):
    memory.add({"role": "user", "content": message})

    # Check for tool command
    if message.startswith("/"):
        parts = message[1:].split(" ", 1)
        tool_name = parts[0]
        args = parts[1] if len(parts) > 1 else ""
        if tool_name in TOOLS:
            result = TOOLS[tool_name]['fn']({'expr': args})
            return result.get('result') or result.get('error')

    # Call OpenRouter GPT
    headers = {"Authorization": f"Bearer {OPENROUTER_KEY}"}
    data = {
        "model": "gpt-4o-mini",
        "messages": [{"role": m["role"], "content": m["content"]} for m in memory.items]
    }

    try:
        r = requests.post(OPENROUTER_URL, headers=headers, json=data, timeout=30)
        r.raise_for_status()
        resp = r.json()
        reply = resp['choices'][0]['message']['content']
    except Exception as e:
        reply = f"❌ OpenRouter error: {str(e)} Echo: {message}"

    memory.add({"role": "bot", "content": reply})
    return reply
