const quizContainer = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const scoreDisplay = document.getElementById('score');

let questions = [];
let currentQuestionIndex = 0;
let score = 0;


async function loadQuestions() {
  const res = await fetch('/api/questions');
  questions = await res.json();
  showQuestion();
}


function showQuestion() {
  const q = questions[currentQuestionIndex];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map(option => `<div class="option">${option}</div>`).join('')}
  `;

  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => checkAnswer(q.id, option.textContent));
  });
}

async function checkAnswer(id, answer) {
  const res = await fetch('/api/answer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId: id, answer })
  });

  const data = await res.json();
  alert(data.message);

  if (data.correct) score++;

  nextBtn.classList.remove('hidden');
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.textContent = 'Show Final Score ';
  }
}


nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  nextBtn.classList.add('hidden');

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    quizContainer.innerHTML = `<h2>Quiz Finished!</h2>`;
    scoreDisplay.textContent = `Your Score: ${score}/${questions.length}`;
  }
});


loadQuestions();
