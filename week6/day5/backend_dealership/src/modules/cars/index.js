import express from "express";
import services from "#@/modules/cars/services/index.js";

const router = express.Router();

// CRUD endpoints
router.get("/", async (req, res) => {
  const data = await services.fetchAll({ query: req.query });
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const data = await services.fetchById({ id: req.params.id });
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = await services.createOne({ payload: req.body });
  res.json(data);
});

router.put("/:id", async (req, res) => {
  const data = await services.updateById({ id: req.params.id, payload: req.body });
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  const data = await services.deleteById({ id: req.params.id });
  res.json(data);
});

export default router;
