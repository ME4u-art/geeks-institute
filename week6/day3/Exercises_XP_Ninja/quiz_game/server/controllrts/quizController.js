
const Question = require('../models/questionModel');


async function startQuiz(req, res) {
  try {
    const ids = await Question.getAllQuestionIds();
    if (!ids || ids.length === 0) return res.status(500).json({ message: 'No questions in DB' });

   
    req.session.questionOrder = ids;         
    req.session.currentIndex = 0;           
    req.session.score = 0;
    req.session.answered = [];               

    const qid = req.session.questionOrder[req.session.currentIndex];
    const q = await Question.getQuestionById(qid);
    const options = await Question.getOptionsByQuestionId(qid);


    res.json({
      questionId: q.id,
      question: q.question,
      options,
      current: req.session.currentIndex + 1,
      total: req.session.questionOrder.length
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}


async function getCurrentQuestion(req, res) {
  try {
    if (!req.session.questionOrder) return res.status(400).json({ message: 'Quiz not started' });

    const idx = req.session.currentIndex;
    if (idx >= req.session.questionOrder.length) return res.status(200).json({ finished: true });

    const qid = req.session.questionOrder[idx];
    const q = await Question.getQuestionById(qid);
    const options = await Question.getOptionsByQuestionId(qid);

    res.json({
      questionId: q.id,
      question: q.question,
      options,
      current: idx + 1,
      total: req.session.questionOrder.length
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}


async function submitAnswer(req, res) {
  try {
    const { questionId, selectedOptionId } = req.body;

    if (!req.session.questionOrder) return res.status(400).json({ message: 'Quiz not started' });

    const idx = req.session.currentIndex;
    if (idx >= req.session.questionOrder.length) return res.status(400).json({ message: 'Quiz already finished' });

    const expectedQid = req.session.questionOrder[idx];
    if (parseInt(questionId) !== expectedQid) {
      return res.status(400).json({ message: 'Question out of order' });
    }

    const q = await Question.getQuestionById(questionId);
    if (!q) return res.status(400).json({ message: 'Invalid question' });

    const options = await Question.getOptionsByQuestionId(questionId);
    const selected = options.find(o => o.id === Number(selectedOptionId));
    if (!selected) return res.status(400).json({ message: 'Invalid option selected' });

    const correct = q.correct_answer.trim().toLowerCase() === selected.option_text.trim().toLowerCase();
    if (correct) req.session.score = (req.session.score || 0) + 1;

 
    req.session.answered.push({
      questionId: q.id,
      selected: selected.option_text,
      correctAnswer: q.correct_answer,
      correct
    });

    req.session.currentIndex++;

    if (req.session.currentIndex >= req.session.questionOrder.length) {
      return res.json({
        correct,
        message: correct ? 'Correct!' : `Wrong! Correct answer: ${q.correct_answer}`,
        finished: true,
        finalScore: req.session.score,
        total: req.session.questionOrder.length
      });
    } else {
  
      const nextQid = req.session.questionOrder[req.session.currentIndex];
      const nextQ = await Question.getQuestionById(nextQid);
      const nextOptions = await Question.getOptionsByQuestionId(nextQid);

      return res.json({
        correct,
        message: correct ? 'Correct!' : `Wrong! Correct answer: ${q.correct_answer}`,
        finished: false,
        next: {
          questionId: nextQ.id,
          question: nextQ.question,
          options: nextOptions,
          current: req.session.currentIndex + 1,
          total: req.session.questionOrder.length
        },
        score: req.session.score
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

function getScore(req, res) {
  if (!req.session.questionOrder) return res.status(400).json({ message: 'Quiz not started' });
  const finalScore = req.session.score || 0;
  const total = req.session.questionOrder.length;

  res.json({ finalScore, total });
}

module.exports = {
  startQuiz,
  getCurrentQuestion,
  submitAnswer,
  getScore
};
