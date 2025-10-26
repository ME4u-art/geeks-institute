
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import greetRouter from "./routes/greet.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); 
app.use("/", greetRouter);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
