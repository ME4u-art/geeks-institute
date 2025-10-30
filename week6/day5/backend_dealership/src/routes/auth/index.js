import express from "express";
import { register, login } from "#@/modules/auth/services/index.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try { res.status(201).json(await register(req.body)); } 
  catch (err) { res.status(400).json({ message: err.message }); }
});

router.post("/login", async (req, res) => {
  try { res.json(await login(req.body)); } 
  catch (err) { res.status(400).json({ message: err.message }); }
});

export default router;
