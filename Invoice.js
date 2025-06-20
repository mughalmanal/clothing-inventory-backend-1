const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }
  ],
  totalAmount: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);