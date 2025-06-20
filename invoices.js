const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

router.post('/', async (req, res) => {
  const invoice = new Invoice(req.body);
  await invoice.save();
  res.json(invoice);
});

router.get('/', async (req, res) => {
  const invoices = await Invoice.find().populate('items.productId');
  res.json(invoices);
});

module.exports = router;