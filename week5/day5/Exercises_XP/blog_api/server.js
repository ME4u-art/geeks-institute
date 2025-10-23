
const express = require('express');
const app = express();

app.use(express.json());


let posts = [
  { id: 1, title: 'First Post', content: 'This is the first blog post.' },
  { id: 2, title: 'Second Post', content: 'Learning Express.js is fun!' },
];


app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});


app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.status(200).json(post);
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;

  res.status(200).json(post);
});


app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  posts.splice(postIndex, 1);
  res.status(200).json({ message: 'Post deleted successfully' });
});


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
