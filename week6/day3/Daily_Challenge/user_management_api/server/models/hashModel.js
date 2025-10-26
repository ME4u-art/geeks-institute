const db = require('../config/db');

const HashModel = {
  async addHashedPassword(username, hashedPassword, connection) {
    await connection.query(
      'INSERT INTO hashpwd (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
  },

  async getUserByUsername(username) {
    const [rows] = await db.query('SELECT * FROM hashpwd WHERE username = ?', [username]);
    return rows[0];
  },
};

module.exports = HashModel;
