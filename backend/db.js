import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/auctiondb";

export const connectDB = async () => {
  console.log("🔌 Connecting to Mongo at:", MONGO_URI);
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Connection error:", err);
    process.exit(1);
  }
};
