const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/clothing-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const productRoutes = require('./routes/products');
const invoiceRoutes = require('./routes/invoices');

app.use('/api/products', productRoutes);
app.use('/api/invoices', invoiceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));