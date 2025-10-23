const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// --- Emoji Data ---
const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '⚽', name: 'Soccer Ball' },
  { emoji: '🎸', name: 'Guitar' },
  { emoji: '🎃', name: 'Pumpkin' },
];

let leaderboard = [];
let playerScore = 0;

// Utility: get random emoji + options
function getRandomQuestion() {
  const correctIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[correctIndex];
  const options = new Set([correctEmoji.name]);

  // Add random incorrect options
  while (options.size < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    options.add(random.name);
  }

  return {
    emoji: correctEmoji.emoji,
    correct: correctEmoji.name,
    options: Array.from(options).sort(() => Math.random() - 0.5),
  };
}

// --- Routes ---
app.get('/api/question', (req, res) => {
  const question = getRandomQuestion();
  res.json(question);
});

app.post('/api/guess', (req, res) => {
  const { guess, correct } = req.body;
  if (guess === correct) {
    playerScore++;
    res.json({ correct: true, score: playerScore });
  } else {
    res.json({ correct: false, score: playerScore });
  }
});

app.post('/api/leaderboard', (req, res) => {
  const { player } = req.body;
  leaderboard.push({ player, score: playerScore });
  leaderboard.sort((a, b) => b.score - a.score);
  if (leaderboard.length > 5) leaderboard = leaderboard.slice(0, 5);
  playerScore = 0;
  res.json(leaderboard);
});

app.listen(PORT, () => console.log(`🎮 Server running on http://localhost:${PORT}`));
