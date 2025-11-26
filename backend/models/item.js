import mongoose from 'mongoose';

// Item Schema
const itemSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  startPrice: { type: Number, required: true, min: 0 },
  reservePrice: { type: Number, required: true, min: 0 },

  // New compare //
  city: { type: String, trim: true },          
  region: { type: String, trim: true },        
  closesAt: { type: Date },                    
  views: { type: Number, default: 0 },         
  watchers: { type: Number, default: 0 },      
  colour: { type: String, trim: true },        
  dimensions: { type: String, trim: true },  
  //  //
  createdAt: { type: String, required: false, trim: true },
  condition: { type: String, required: true, trim: true },
  imagePath: { type: String, required: true, trim: true },
  imageDescription: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },

  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    required: true
  },

  questions: [
    {
      text: { type: String, required: true }, 
      answer: { type: String }
    }
  ]
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
