import mongoose from 'mongoose';

// Item Schema
const itemSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    startPrice: { type: Number, required: true, min: 0 },
    reservePrice: { type: Number, required: true, min: 0 },
    createdAt: { type: String, required: false, trim: true },
    condition: { type: String, required: true, trim: true },
    imagePath: { type: String, required: true, trim: true },
    imageDescription: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",   
        required: true   
    }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;