// models/Seller.js
import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, default: 0, min: 0, max: 5 }
});

export default mongoose.model("Seller", sellerSchema);