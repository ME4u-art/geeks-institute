const db = require('../config/db');

const UserModel = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  async createUser(email, username, first_name, last_name, connection) {
    const [result] = await connection.query(
      'INSERT INTO users (email, username, first_name, last_name) VALUES (?, ?, ?, ?)',
      [email, username, first_name, last_name]
    );
    return result.insertId;
  },

  async updateUser(id, data) {
    const { email, username, first_name, last_name } = data;
    await db.query(
      'UPDATE users SET email=?, username=?, first_name=?, last_name=? WHERE id=?',
      [email, username, first_name, last_name, id]
    );
  },
};

module.exports = UserModel;
