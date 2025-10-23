
const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: 'Learn Express', completed: false },
  { id: 2, title: 'Build a CRUD API', completed: true },
];


app.get('/api/todos', (req, res) => res.json(todos));


app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  res.json(todo);
});


app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  const newTodo = { id: todos.length + 1, title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});


app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: 'Todo not found' });

  const { title, completed } = req.body;
  if (title) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});


app.delete('/api/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Todo not found' });

  todos.splice(index, 1);
  res.json({ message: 'Todo deleted successfully' });
});


app.listen(5000, () => console.log('Todo API running on http://localhost:5000'));
