const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Import the models
const ProductModel = require('./models/Product');
const OrderModel = require('./models/orders');
const UserModel = require('./models/User');

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the routes
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');

// Use the routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/auth', authRoutes);

module.exports = app;