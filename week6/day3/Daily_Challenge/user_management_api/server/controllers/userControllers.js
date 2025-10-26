const bcrypt = require('bcrypt');
const db = require('../config/db');
const UserModel = require('../models/userModel');
const HashModel = require('../models/hashModel');

const userController = {
 
  async register(req, res) {
    const { email, username, first_name, last_name, password } = req.body;
    if (!email || !username || !password)
      return res.status(400).json({ error: 'Missing required fields' });

    try {
      const connection = await db.getConnection();
      await connection.beginTransaction();

      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = await UserModel.createUser(email, username, first_name, last_name, connection);
      await HashModel.addHashedPassword(username, hashedPassword, connection);

      await connection.commit();
      connection.release();

      res.status(201).json({ message: 'User registered successfully', userId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Registration failed' });
    }
  },


  async login(req, res) {
    const { username, password } = req.body;
    try {
      const user = await HashModel.getUserByUsername(username);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return res.status(401).json({ error: 'Invalid password' });

      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: 'Login failed' });
    }
  },

  async getUsers(req, res) {
    try {
      const users = await UserModel.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch users' });
    }
  },


  async getUserById(req, res) {
    try {
      const user = await UserModel.getById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch user' });
    }
  },


  async updateUser(req, res) {
    try {
      await UserModel.updateUser(req.params.id, req.body);
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Update failed' });
    }
  },
};

module.exports = userController;
