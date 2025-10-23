let currentCorrect = '';
let score = 0;

async function loadQuestion() {
  const res = await fetch('/api/question');
  const data = await res.json();

  currentCorrect = data.correct;
  document.getElementById('emoji').textContent = data.emoji;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  data.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => submitGuess(option);
    optionsDiv.appendChild(btn);
  });
}

async function submitGuess(guess) {
  const res = await fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess, correct: currentCorrect })
  });
  const data = await res.json();

  const feedback = document.getElementById('feedback');
  const scoreEl = document.getElementById('score');

  if (data.correct) {
    feedback.textContent = '✅ Correct!';
  } else {
    feedback.textContent = '❌ Wrong!';
  }
  scoreEl.textContent = data.score;

  setTimeout(() => {
    feedback.textContent = '';
    loadQuestion();
  }, 1000);
}

document.getElementById('save-score').onclick = async () => {
  const player = prompt('Enter your name:');
  if (!player) return;

  const res = await fetch('/api/leaderboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ player })
  });

  const leaderboard = await res.json();
  const list = document.getElementById('leaderboard');
  list.innerHTML = leaderboard.map(item => `<li>${item.player}: ${item.score}</li>`).join('');
};

loadQuestion();
