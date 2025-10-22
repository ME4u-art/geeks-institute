const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data fetched successfully!");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
