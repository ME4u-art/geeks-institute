import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  price: { type: Number, required: true },
});

export default mongoose.model("Sale", saleSchema);
