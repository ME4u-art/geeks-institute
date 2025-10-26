const GRID_SIZE = 10;

function startNewGame(player1, player2) {
  const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill('.'));

  const game = {
    grid,
    players: {
      [player1]: { name: player1, x: 0, y: 0, base: { x: 0, y: 0 } },
      [player2]: { name: player2, x: 9, y: 9, base: { x: 9, y: 9 } },
    },
    turn: player1,
    winner: null,
  };

  grid[0][0] = 'A';
  grid[9][9] = 'B';

  return game;
}

function makeMove(game, player, direction) {
  if (game.winner) throw new Error(`Game over! Winner: ${game.winner}`);
  if (game.turn !== player) throw new Error('Not your turn!');

  const playerData = game.players[player];
  const { x, y } = playerData;
  let newX = x;
  let newY = y;

  if (direction === 'up') newY--;
  if (direction === 'down') newY++;
  if (direction === 'left') newX--;
  if (direction === 'right') newX++;

  // Validate move
  if (newX < 0 || newX >= GRID_SIZE || newY < 0 || newY >= GRID_SIZE)
    throw new Error('Move out of bounds');

  // Move player
  playerData.x = newX;
  playerData.y = newY;

  const opponent = Object.keys(game.players).find((p) => p !== player);
  const opponentBase = game.players[opponent].base;

  // Check win conditions
  if (newX === opponentBase.x && newY === opponentBase.y) {
    game.winner = player;
  }

  // Switch turns
  game.turn = opponent;
  return getGameState(game);
}

function getGameState(game) {
  return {
    players: game.players,
    turn: game.turn,
    winner: game.winner,
  };
}

module.exports = { startNewGame, makeMove, getGameState };
