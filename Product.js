const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  color: String,
  size: String,
  price: Number,
  quantity: Number,
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);