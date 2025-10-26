const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { startNewGame, makeMove, getGameState } = require('./game/gameLogic');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory game storage
let currentGame = null;

// Start new game
app.post('/api/game/start', (req, res) => {
  const { player1, player2 } = req.body;
  if (!player1 || !player2) {
    return res.status(400).json({ message: 'Both players are required' });
  }
  currentGame = startNewGame(player1, player2);
  res.json(currentGame);
});

// Make a move
app.post('/api/game/move', (req, res) => {
  if (!currentGame) return res.status(400).json({ message: 'No active game' });
  const { player, direction } = req.body;
  try {
    const result = makeMove(currentGame, player, direction);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get current game state
app.get('/api/game/state', (req, res) => {
  if (!currentGame) return res.status(400).json({ message: 'No active game' });
  res.json(getGameState(currentGame));
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
