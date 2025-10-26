
const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/start', quizController.startQuiz);
router.get('/current', quizController.getCurrentQuestion);
router.post('/answer', quizController.submitAnswer);
router.get('/score', quizController.getScore);

module.exports = router;
