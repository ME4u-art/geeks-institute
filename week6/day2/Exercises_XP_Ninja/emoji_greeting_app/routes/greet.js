
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];


router.get("/", (req, res) => {
  const form = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emoji Greeting App</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #ffecd2, #fcb69f);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      form {
        background: #fff;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        text-align: center;
      }
      select, input {
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
      button {
        background-color: #ff7b54;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #ff5722;
      }
    </style>
  </head>
  <body>
    <form action="/greet" method="POST">
      <h2>Choose your emoji greeting 👋</h2>
      <input type="text" name="name" placeholder="Enter your name" required />
      <br>
      <select name="emoji" required>
        ${emojis.map((e) => `<option value="${e}">${e}</option>`).join("")}
      </select>
      <br>
      <button type="submit">Greet Me!</button>
    </form>
  </body>
  </html>
  `;
  res.send(form);
});


router.post("/greet", (req, res) => {
  const { name, emoji } = req.body;

  if (!name || !emoji) {
    return res.status(400).send(`
      <h2>⚠️ Please enter your name and select an emoji.</h2>
      <a href="/">Go back</a>
    `);
  }

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Greeting Result</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #c3ec52, #0ba29d);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: #fff;
      }
      div {
        text-align: center;
      }
      h1 {
        font-size: 2.5rem;
      }
      a {
        display: inline-block;
        margin-top: 20px;
        background: #fff;
        color: #0ba29d;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>${emoji} Hello, ${name}! ${emoji}</h1>
      <p>Have an amazing day!</p>
      <a href="/">Back to Home</a>
    </div>
  </body>
  </html>
  `);
});

export default router;
