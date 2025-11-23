import mongoose from 'mongoose';
//Zod for sanatizing 

//Item Schema
const itemSchema = mongoose.Schema({
    title: { type: String, required: true, trim: true },
    startPrice: { type: Number, required: true, min: 0 },
    reservePrice: { type: Number, required: true, min: 0 },
    createdAt: { type: String, required: false, trim: true },
    condition: { type: String, required: true, trim: true },
    imagePath: { type: String, required: true, trim: true },
    imageDescription: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
})

const Item = mongoose.model('Item', itemSchema);

export default Item;

