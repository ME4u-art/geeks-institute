const express = require('express');
const app = express();


app.use(express.json());


const todoRoutes = require('./routes/todos');


app.use('/todos', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
