
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Madrid', 'Berlin', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    id: 2,
    question: 'Which programming language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    correctAnswer: 'JavaScript'
  },
  {
    id: 3,
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Syntax',
      'Creative Style System'
    ],
    correctAnswer: 'Cascading Style Sheets'
  }
];

app.get('/api/questions', (req, res) => {
  res.json(questions);
});


app.post('/api/answer', (req, res) => {
  const { questionId, answer } = req.body;
  const question = questions.find(q => q.id === questionId);

  if (!question) {
    return res.status(404).json({ correct: false, message: 'Question not found' });
  }

  const correct = question.correctAnswer === answer;
  res.json({
    correct,
    message: correct ? ' Correct!' : `❌ Wrong! The correct answer is ${question.correctAnswer}.`
  });
});


const PORT = 5000;
app.listen(PORT, () => console.log(` Quiz Game running on http://localhost:${PORT}`));
