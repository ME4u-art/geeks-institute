const gridContainer = document.getElementById('grid');
const info = document.getElementById('info');
const startBtn = document.getElementById('startBtn');
let currentPlayer = null;

startBtn.addEventListener('click', async () => {
  const p1 = document.getElementById('p1').value;
  const p2 = document.getElementById('p2').value;
  const res = await fetch('/api/game/start', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ player1: p1, player2: p2 })
  });
  const game = await res.json();
  currentPlayer = game.turn;
  renderBoard(game);
});

document.querySelectorAll('.controls button').forEach(btn => {
  btn.addEventListener('click', async () => {
    if (!currentPlayer) return;
    const direction = btn.dataset.dir;
    const res = await fetch('/api/game/move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ player: currentPlayer, direction })
    });
    const data = await res.json();
    if (data.message) return alert(data.message);
    renderBoard(data);
  });
});

function renderBoard(game) {
  gridContainer.innerHTML = '';
  const cells = [];
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      const { players } = game;
      if (x === players[Object.keys(players)[0]].base.x && y === players[Object.keys(players)[0]].base.y)
        div.classList.add('baseA');
      if (x === players[Object.keys(players)[1]].base.x && y === players[Object.keys(players)[1]].base.y)
        div.classList.add('baseB');
      if (x === players[Object.keys(players)[0]].x && y === players[Object.keys(players)[0]].y)
        div.classList.add('playerA');
      if (x === players[Object.keys(players)[1]].x && y === players[Object.keys(players)[1]].y)
        div.classList.add('playerB');
      gridContainer.appendChild(div);
    }
  }

  if (game.winner) {
    info.innerHTML = `🏆 Winner: ${game.winner}`;
  } else {
    info.innerHTML = `🎯 Turn: ${game.turn}`;
    currentPlayer = game.turn;
  }
}
