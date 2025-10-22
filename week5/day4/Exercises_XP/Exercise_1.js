const express = require('express');
const app = express();
app.use(express.json()); 


let posts = [
  { id: 1, title: "My first post", content: "Hello world!" },
  { id: 2, title: "Another post", content: "Learning Express.js is fun!" }
];


app.get('/posts', (req, res) => {
  res.json(posts);
});


app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});


app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});


app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});


app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send(); 
});


app.use((req, res) => res.status(404).json({ message: "Route not found" }));


app.listen(3000, () => console.log("Server running on port 3000"));
