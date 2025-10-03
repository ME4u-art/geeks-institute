from flask import Flask, request, jsonify, send_from_directory
from intelligence import generate_reply
from memory import MemoryManager
import os
from PIL import Image
import pytesseract
from PyPDF2 import PdfReader
from docx import Document

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

mem = MemoryManager()

def extract_file_content(filepath):
    ext = os.path.splitext(filepath)[1].lower()
    content = ""
    try:
        if ext in ['.png', '.jpg', '.jpeg']:
            img = Image.open(filepath)
            content = pytesseract.image_to_string(img)
        elif ext == '.pdf':
            reader = PdfReader(filepath)
            content = "\n".join([page.extract_text() for page in reader.pages if page.extract_text()])
        elif ext == '.docx':
            doc = Document(filepath)
            content = "\n".join([p.text for p in doc.paragraphs])
    except Exception as e:
        content = f"Error reading file: {str(e)}"
    return content

@app.route('/')
def home():
    return send_from_directory('static', 'index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    bot_reply = generate_reply(user_message, mem)
    return jsonify({'reply': bot_reply})

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files.get('file')
    if file:
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)

        content = extract_file_content(filepath)
        if content:
            mem.add({"role": "user", "content": f"[Uploaded file: {file.filename}] {content}"})

        reply = f"✅ File {file.filename} uploaded successfully! You can now ask questions about it."
        return jsonify({'reply': reply})
    return jsonify({'reply': '⚠️ No file received'})

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
