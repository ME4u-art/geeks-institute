const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const userRoutes = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
