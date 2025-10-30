import express from "express";
import authRoutes from "#@/routes/auth/index.js";
import carsRoutes from "#@/routes/cars/index.js";
import usersRoutes from "#@/routes/users/index.js";
import salesRoutes from "#@/routes/sales/index.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/cars", carsRoutes);
router.use("/users", usersRoutes);
router.use("/sales", salesRoutes);

export default router;
