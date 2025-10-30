import express from "express";
import saleService from "#@/modules/sales/services/index.js";
import { protect } from "#@/middlewares/auth.js";
import { authorize } from "#@/middlewares/roles.js";

const router = express.Router();

// All routes require authentication
router.use(protect);

// Get all sales (admin only)
router.get("/", authorize("admin"), async (req, res) => {
  const sales = await saleService.fetchAll({ query: req.query });
  res.json(sales);
});

// Create a new sale (admin or sales)
router.post("/", authorize("admin", "sales"), async (req, res) => {
  const sale = await saleService.createOne({ payload: req.body });
  res.status(201).json(sale);
});

// Get sale by ID (admin or sales)
router.get("/:id", authorize("admin", "sales"), async (req, res) => {
  const sale = await saleService.fetchById({ id: req.params.id });
  res.json(sale);
});

// Update sale (admin only)
router.put("/:id", authorize("admin"), async (req, res) => {
  const sale = await saleService.updateById({ id: req.params.id, payload: req.body });
  res.json(sale);
});

// Delete sale (admin only)
router.delete("/:id", authorize("admin"), async (req, res) => {
  const sale = await saleService.deleteById({ id: req.params.id });
  res.json(sale);
});

export default router;
