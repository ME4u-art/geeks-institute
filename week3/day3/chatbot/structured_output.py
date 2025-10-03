# structured_output.py
from pydantic import BaseModel
from typing import Optional, Dict, Any, List

class ChatbotResponse(BaseModel):
    reply: str
    intent: Optional[str] = None
    entities: Dict[str, Any] = {}
    actions: List[Dict[str, Any]] = []
