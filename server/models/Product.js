//product_id,product_name,product_price,product stock left


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: { type: String, required: true, unique: true },
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_stock_left: { type: Number, required: true }
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;