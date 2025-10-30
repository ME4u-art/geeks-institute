import express from "express";
import carService from "#@/modules/cars/services/index.js";
import { protect } from "#@/middlewares/auth.js";
import { authorize } from "#@/middlewares/roles.js";

const router = express.Router();
router.use(protect);

router.get("/", async (req, res) => res.json(await carService.fetchAll({ query: req.query })));
router.post("/", authorize("admin"), async (req, res) => res.status(201).json(await carService.createOne({ payload: req.body })));
router.get("/:id", async (req, res) => res.json(await carService.fetchById({ id: req.params.id })));
router.put("/:id", authorize("admin"), async (req, res) => res.json(await carService.updateById({ id: req.params.id, payload: req.body })));
router.delete("/:id", authorize("admin"), async (req, res) => res.json(await carService.deleteById({ id: req.params.id })));

export default router;
