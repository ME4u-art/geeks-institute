import express from "express";
import bookRoutes from "./server/routes/bookRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/books", bookRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(5000, () => console.log("📚 Book API running on port 5000"));
