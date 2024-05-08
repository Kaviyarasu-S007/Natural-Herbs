const ProductModel = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error getting all products:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { product_id, product_name, product_price, product_stock_left } = req.body;

    // Check if the product_id already exists
    const existingProduct = await ProductModel.findOne({ product_id });
    if (existingProduct) {
      return res.status(400).json({ message: 'Product ID already exists' });
    }

    const newProduct = new ProductModel({
      product_id,
      product_name,
      product_price,
      product_stock_left
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { product_id, product_name, product_price, product_stock_left } = req.body;

    const updatedProduct = await ProductModel.findOneAndUpdate(
      { product_id: req.params.id },
      { product_name, product_price, product_stock_left },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await ProductModel.findOneAndDelete({ product_id: req.params.id });

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};