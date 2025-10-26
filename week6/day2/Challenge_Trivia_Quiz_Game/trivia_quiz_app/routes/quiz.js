
import express from "express";
const router = express.Router();
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];


let currentQuestionIndex = 0;
let score = 0;

function renderQuestion(questionText) {
  return `
    <h2>Question:</h2>
    <p>${questionText}</p>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" placeholder="Your answer" required />
      <button type="submit">Submit</button>
    </form>
  `;
}


router.get("/", (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }

  const question = triviaQuestions[currentQuestionIndex];
  res.send(renderQuestion(question.question));
});


router.post("/", (req, res) => {
  const userAnswer = req.body.answer.trim();

  const currentQuestion = triviaQuestions[currentQuestionIndex];
  let feedback = "";

  if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score++;
    feedback = "Correct!";
  } else {
    feedback = `Incorrect! The correct answer was "${currentQuestion.answer}"`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }

  const nextQuestion = triviaQuestions[currentQuestionIndex];

  res.send(`
    <p>${feedback}</p>
    ${renderQuestion(nextQuestion.question)}
  `);
});


router.get("/score", (req, res) => {
  const totalQuestions = triviaQuestions.length;
  const finalScore = score;


  currentQuestionIndex = 0;
  score = 0;

  res.send(`
    <h2>🏆 Quiz Finished!</h2>
    <p>Your score: ${finalScore} / ${totalQuestions}</p>
    <a href="/quiz">Play Again</a>
  `);
});

export default router;
