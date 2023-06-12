const Product = require('../models/Product');
const { validationResult } = require('express-validator');

exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, price, quantity } = req.body;

  let productName = await Product.findOne({name:name});

  if (productName) {
    return res
      .status(400)
      .json({ message: "Product already exists" });
  }

  try {
    const product = new Product({
      name,
      description,
      price,
      quantity,
      seller: req.user.id,
    });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.searchProducts = async (req, res) => {
  const query = req.query.q || '';

  try {
    const products = await Product.find({
      name: { $regex: query, $options: 'i' },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
