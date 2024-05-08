const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// Define order routes and link them to the controller functions
router.get('/orders', ordersController.getAllOrders);
router.post('/create', ordersController.createOrder);
router.put('/:id', ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;



