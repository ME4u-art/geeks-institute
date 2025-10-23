
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';


app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});


app.get('/api/posts/:id', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/${req.params.id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Post not found' });
  }
});


app.post('/api/posts', async (req, res) => {
  try {
    const response = await axios.post(BASE_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post' });
  }
});


app.put('/api/posts/:id', async (req, res) => {
  try {
    const response = await axios.put(`${BASE_URL}/${req.params.id}`, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: 'Error updating post' });
  }
});


app.delete('/api/posts/:id', async (req, res) => {
  try {
    await axios.delete(`${BASE_URL}/${req.params.id}`);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting post' });
  }
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
