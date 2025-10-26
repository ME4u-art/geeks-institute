const express = require('express');
const app = express();

app.use(express.json());

const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`📚 Book API running on http://localhost:${PORT}`);
});
