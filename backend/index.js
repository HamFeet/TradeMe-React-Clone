// index.js
import Item from "./models/item.js";

// Add Item
const addItem = async (item) => {
  try {
    const result = await Item.create(item);
    console.info("New Item Added:", result);
    return result;
  } catch (err) {
    console.error("Error adding item:", err);
    throw err;
  }
};

// Find Item
const findItem = async (item) => {
  try {
    // Make case insensitive
    const search = new RegExp(item, "i");
    const results = await Item.find({ title: search });
    console.info(results);
    console.info(`${results.length} matches`);
    return results;
  } catch (err) {
    console.error("Error during item search:", err);
    throw err;
  }
};

// Update Item
const updateItem = async (_id, newItem) => {
  try {
    const results = await Item.findByIdAndUpdate(_id, newItem, { new: true });
    console.info("Item updated:", results);
    return results;
  } catch (err) {
    console.error("Error updating item:", err);
    throw err;
  }
};

// Remove Item
const removeItem = async (id) => {
  try {
    const result = await Item.findByIdAndDelete(id);
    console.info("Item removed:", result);
    return result;
  } catch (err) {
    console.error("Error removing item:", err);
    throw err;
  }
};

// List Items
const listItems = async () => {
  try {
    const results = await Item.find();
    console.info(results);
    console.info(`${results.length} items`);
    return results;
  } catch (err) {
    console.error("Error listing items:", err);
    throw err;
  }
};

// Export methods
export {
  addItem,
  findItem,
  updateItem,
  removeItem,
  listItems
};