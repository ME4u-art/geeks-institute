import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ["available", "sold"], default: "available" },
});

export default mongoose.model("Car", carSchema);
