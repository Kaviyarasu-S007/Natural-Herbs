const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Define product routes and link them to the controller functions
router.get('/', productsController.getAllProducts);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;