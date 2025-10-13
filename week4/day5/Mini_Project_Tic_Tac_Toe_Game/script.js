const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");
const chooseX = document.getElementById("chooseX");
const chooseO = document.getElementById("chooseO");
const levelSelect = document.getElementById("level");

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let boardState = Array(9).fill(null);
let player = "X";
let computer = "O";
let gameOver = false;

chooseX.addEventListener("click", () => setPlayer("X"));
chooseO.addEventListener("click", () => setPlayer("O"));
restartBtn.addEventListener("click", restartGame);
cells.forEach((cell) => cell.addEventListener("click", handleClick));

function setPlayer(symbol) {
  player = symbol;
  computer = symbol === "X" ? "O" : "X";
  restartGame();
}

function handleClick(e) {
  const index = e.target.id;
  if (gameOver || boardState[index]) return;

  boardState[index] = player;
  e.target.textContent = player;

  if (checkWinner(player)) return endGame(`${player} wins!`);
  if (boardState.every(Boolean)) return endGame("Tie Game!");

  computerMove();
}

function computerMove() {
  const level = levelSelect.value;
  let move;

  if (level === "easy") {
    const empty = boardState.map((v, i) => (v ? null : i)).filter((v) => v !== null);
    move = empty[Math.floor(Math.random() * empty.length)];
  } else {
    // Hard mode: try to win or block
    move = findBestMove();
  }

  if (move != null) {
    boardState[move] = computer;
    cells[move].textContent = computer;

    if (checkWinner(computer)) return endGame(`${computer} wins!`);
    if (boardState.every(Boolean)) return endGame("Tie Game!");
  }
}

function findBestMove() {
  // 1. Try to win
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    const values = [boardState[a], boardState[b], boardState[c]];
    if (values.filter((v) => v === computer).length === 2 && values.includes(null)) {
      return combo[values.indexOf(null)];
    }
  }
  // 2. Block player
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    const values = [boardState[a], boardState[b], boardState[c]];
    if (values.filter((v) => v === player).length === 2 && values.includes(null)) {
      return combo[values.indexOf(null)];
    }
  }
  // 3. Pick random
  const empty = boardState.map((v, i) => (v ? null : i)).filter((v) => v !== null);
  return empty[Math.floor(Math.random() * empty.length)];
}

function checkWinner(symbol) {
  return winCombos.some((combo) => combo.every((i) => boardState[i] === symbol));
}

function endGame(text) {
  message.textContent = text;
  gameOver = true;
}

function restartGame() {
  boardState = Array(9).fill(null);
  cells.forEach((cell) => (cell.textContent = ""));
  message.textContent = "";
  gameOver = false;
}
