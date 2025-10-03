# Smart Chatbot with AI & File Uploads

This is a modern AI-powered chatbot built with Python, Flask, and OpenRouter GPT.  
It supports file uploads, persistent conversation memory, smart tools, and a responsive chat UI.

## Features

- Fully AI-powered using **OpenRouter GPT**  
- Persistent memory across sessions  
- File uploads: images (OCR), PDFs, DOCX  
- Bot can summarize or answer questions about uploaded files  
- Smart tools: `/calc`, `/time`  
- Modern UI: dark/light mode, emojis, timestamps, typing animations  

## Project Structure

chatbot/
│
├── app.py
├── intelligence.py
├── memory.py
├── tools.py
├── requirements.txt
├── uploads/ # folder for uploaded files
└── static/
├── style.css
└── index.html



## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/chatbot.git
cd chatbot

## Install dependencies:
pip install -r requirements.txt

## Create a .env file with your OpenRouter API key:
OPENROUTER_API_KEY=your_openrouter_api_key_here


## Run the app 
python app.py

Open your browser at http://127.0.0.1:5000

Usage

Type messages to chat with the AI bot.

Upload files (images, PDFs, DOCX) using the 📎 button.

Use commands like /calc 2+2 or /time for tools.