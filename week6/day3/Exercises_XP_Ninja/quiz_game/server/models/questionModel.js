
const pool = require('../config/db');

async function getAllQuestionIds() {
  const res = await pool.query('SELECT id FROM questions ORDER BY id ASC');
  return res.rows.map(r => r.id);
}


async function getQuestionById(id) {
  const res = await pool.query('SELECT id, question, correct_answer FROM questions WHERE id = $1', [id]);
  return res.rows[0];
}


async function getOptionsByQuestionId(questionId) {
  const res = await pool.query(`
    SELECT o.id, o.option_text
    FROM options o
    JOIN question_options qo ON o.id = qo.option_id
    WHERE qo.question_id = $1
    ORDER BY o.id
  `, [questionId]);
  return res.rows;
}

module.exports = {
  getAllQuestionIds,
  getQuestionById,
  getOptionsByQuestionId
};
