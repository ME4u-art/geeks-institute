import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./server/routes/todoRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/todos", todoRoutes);


app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
