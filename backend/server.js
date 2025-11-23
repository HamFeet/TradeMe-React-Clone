// server.js
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { itemSanitizer } from "./models/itemSanitizer.js";
import { sellerSanitizer } from "./models/sellerSanitizer.js";
import Item from "./models/item.js";
import Seller from "./models/seller.js";
import { z } from "zod";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ------------------- ROUTES -------------------

// Add Seller
app.post("/seller/add", async (req, res) => {
  const parseResult = sellerSanitizer.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ error: parseResult.error });
  }

  try {
    const seller = await Seller.create(parseResult.data);
    res.status(201).json({ success: true, data: seller });
  } catch (error) {
    console.error("Error adding seller:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add Item
app.post("/item/add", async (req, res) => {
  try {
    const parseResult = itemSanitizer.safeParse(req.body);
    if (!parseResult.success) {
      const errorTree = z.treeifyError(parseResult.error);
      return res.status(400).json({ error: errorTree });
    }

    const { sellerId, ...sanitizedData } = parseResult.data;

    //Check seller exists
    const seller = await Seller.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ success: false, error: "Seller not found" });
    }

    const item = await Item.create({ ...sanitizedData, seller: seller._id });
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

//GET route with populate
app.get("/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate("seller");
    if (!item) return res.status(404).json({ success: false, error: "Item not found" });
    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ------------------- START SERVER -------------------
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});