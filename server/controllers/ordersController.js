const OrderModel = require('../models/orders');

// Implement the controller functions for order-related operations
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    console.log("Connected successfully to server");
    console.log(orders);
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error getting all orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { order_id, order_bucket, cost, address } = req.body;

    // Check if order_bucket is an object
    if (!order_bucket || typeof order_bucket !== 'object') {
      return res.status(400).json({ message: 'Invalid order_bucket data' });
    }

    const newOrder = new OrderModel({ order_id, order_bucket, cost, address });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { order_id, order_bucket, cost, address } = req.body;

    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      { order_id, order_bucket, cost, address },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await OrderModel.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ message: 'Server error' });
  }
};