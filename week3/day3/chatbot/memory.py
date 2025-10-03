import json, os

class MemoryManager:
    def __init__(self, filename='memory.json'):
        self.filename = filename
        self.items = []
        if os.path.exists(filename):
            self.load()

    def add(self, message):
        self.items.append(message)
        self.save()

    def load(self):
        with open(self.filename, 'r', encoding='utf-8') as f:
            try: self.items = json.load(f)
            except: self.items = []

    def save(self):
        with open(self.filename, 'w', encoding='utf-8') as f:
            json.dump(self.items, f, indent=2)
