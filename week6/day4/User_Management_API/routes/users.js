const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const router = express.Router();

const USERS_FILE = 'users.json';


const loadUsers = () => {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};


router.post('/register', async (req, res) => {
  const { name, lastname, email, username, password } = req.body;

  if (!name || !lastname || !email || !username || !password)
    return res.status(400).json({ message: 'All fields are required' });

  const users = loadUsers();
  const exists = users.find(u => u.username === username || u.password === password);
  if (exists) return res.status(400).json({ message: 'Username or password already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const id = users.length ? users[users.length - 1].id + 1 : 1;

  users.push({ id, name, lastname, email, username, password: hashedPassword });
  saveUsers(users);

  res.json({ message: 'User registered successfully' });
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.username === username);

  if (!user) return res.status(400).json({ message: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: 'Incorrect password' });

  res.json({ message: 'Login successful' });
});


router.get('/', (req, res) => {
  const users = loadUsers();
  res.json(users);
});


router.get('/:id', (req, res) => {
  const users = loadUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});


router.put('/:id', (req, res) => {
  const users = loadUsers();
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: 'User not found' });

  const { name, lastname, email, username, password } = req.body;
  if (name) users[idx].name = name;
  if (lastname) users[idx].lastname = lastname;
  if (email) users[idx].email = email;
  if (username) users[idx].username = username;
  if (password) users[idx].password = bcrypt.hashSync(password, 10);

  saveUsers(users);
  res.json({ message: 'User updated successfully', user: users[idx] });
});

module.exports = router;
