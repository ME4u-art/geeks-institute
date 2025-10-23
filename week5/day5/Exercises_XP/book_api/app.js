
const express = require('express');
const app = express();

app.use(express.json()); 


let books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
];


app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
});


app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
