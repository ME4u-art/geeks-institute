
const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5000;


app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log(' Data successfully retrieved and sent!');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
