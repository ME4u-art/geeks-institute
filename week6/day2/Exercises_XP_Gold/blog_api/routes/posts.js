
import express from "express";
import { posts } from "../data/postsData.js";

const router = express.Router();


router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});


router.post("/", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content,
    timestamp: new Date(),
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});


router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find((p) => p.id === id);

  if (!post) return res.status(404).json({ message: "Post not found" });
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  post.title = title;
  post.content = content;
  post.timestamp = new Date();
  res.json(post);
});


router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  posts.splice(index, 1);
  res.json({ message: "Post deleted successfully" });
});

export default router;
