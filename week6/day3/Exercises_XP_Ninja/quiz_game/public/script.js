
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const progressEl = document.getElementById('progress');
const finalScoreEl = document.getElementById('finalScore');

async function startQuiz() {
  feedbackEl.textContent = '';
  const res = await fetch('/api/quiz/start');
  const data = await res.json();

  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion(data);
}

function renderQuestion(data) {
  progressEl.textContent = `Question ${data.current} of ${data.total}`;
  questionEl.textContent = data.question;
  optionsEl.innerHTML = '';

  data.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.option_text;
    btn.onclick = () => submitAnswer(data.questionId, opt.id);
    optionsEl.appendChild(btn);
  });
}

async function submitAnswer(questionId, optionId) {

  Array.from(document.querySelectorAll('.option-btn')).forEach(b => b.disabled = true);

  const res = await fetch('/api/quiz/answer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId, selectedOptionId: optionId })
  });

  const data = await res.json();
  feedbackEl.textContent = data.message || (data.correct ? 'Correct!' : 'Wrong');

  if (data.finished) {

    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreEl.textContent = `Your score: ${data.finalScore} / ${data.total}`;
  } else {

    setTimeout(() => {
      feedbackEl.textContent = '';
      renderQuestion(data.next);
    }, 900);
  }
}

async function restart() {
 
  startScreen.classList.remove('hidden');
  quizScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', async () => {
  
  await fetch('/api/quiz/start'); 
  restart();
});
