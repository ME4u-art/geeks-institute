
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 } 
}));


app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/api/quiz', quizRoutes);


app.use((req, res) => res.status(404).json({ message: 'Not found' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
