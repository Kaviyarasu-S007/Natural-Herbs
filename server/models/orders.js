const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: { type: String, required: true, unique: true },
  order_bucket: { type: Object, required: true },
  cost: { type: Number, required: true },
  address: { type: String, required: true }
});

const Order = mongoose.model('Orders', orderSchema,'Orders');

module.exports = Order;