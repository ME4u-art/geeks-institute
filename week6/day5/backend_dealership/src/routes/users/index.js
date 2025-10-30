import express from "express";
import userService from "#@/modules/users/services/index.js";
import { protect } from "#@/middlewares/auth.js";
import { authorize } from "#@/middlewares/roles.js";

const router = express.Router();

// All routes require authentication
router.use(protect);

// Get all users (admin only)
router.get("/", authorize("admin"), async (req, res) => {
  const users = await userService.fetchAll({ query: req.query });
  res.json(users);
});

// Create user (admin only)
router.post("/", authorize("admin"), async (req, res) => {
  const user = await userService.createOne({ payload: req.body });
  res.status(201).json(user);
});

// Get user by ID (admin only)
router.get("/:id", authorize("admin"), async (req, res) => {
  const user = await userService.fetchById({ id: req.params.id });
  res.json(user);
});

// Update user (admin only)
router.put("/:id", authorize("admin"), async (req, res) => {
  const user = await userService.updateById({ id: req.params.id, payload: req.body });
  res.json(user);
});

// Delete user (admin only)
router.delete("/:id", authorize("admin"), async (req, res) => {
  const user = await userService.deleteById({ id: req.params.id });
  res.json(user);
});

export default router;
