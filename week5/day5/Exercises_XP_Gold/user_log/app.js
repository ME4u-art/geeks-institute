
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = []; 
const SECRET_KEY = 'supersecretkey'; 


app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: 'Username and password required' });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
});


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).json({ message: 'Invalid password' });

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.status(200).json({ message: 'Login successful', token });
});
app.get('/api/profile', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ message: 'Welcome to your profile', user: decoded.username });
  } catch {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
});


app.listen(5000, () => console.log(' User Login API running on http://localhost:5000'));
