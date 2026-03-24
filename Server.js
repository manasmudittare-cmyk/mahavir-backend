const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Connect MongoDB (we’ll add real URL later)
mongoose.connect(process.env.MONGO_URI);

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

const Product = mongoose.model('Product', ProductSchema);

// API route
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get('/', (req, res) => {
  res.send('Mahavir Backend Running 🚀');
});

app.listen(5000, () => console.log('Server running on port 5000'));
