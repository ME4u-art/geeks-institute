const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", publishedYear: 2018 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988 }
];


app.get('/api/books', (req, res) => res.json(books));


app.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});


app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});


app.put('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = req.body.title;
  book.author = req.body.author;
  book.publishedYear = req.body.publishedYear;
  res.json(book);
});


app.delete('/api/books/:bookId', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.bookId));
  res.status(204).send();
});

app.listen(5000, () => console.log("Server running on port 5000"));
