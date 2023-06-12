const Product = require("../models/Product");
const { validationResult } = require("express-validator");

exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, price, quantity } = req.body;

  let productName = await Product.findOne({ name });

  if (productName) {
    return res.status(400).json({ message: "Product already exists" });
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
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateProductQuantity = async (req, res) => {
  const { name, quantity } = req.body;

  try {
    const product = await Product.findOne({ name });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (quantity > product.quantity) {
      return res
        .status(400)
        .json({ message: "Input quantity exceeds available quantity" });
    }

    const updatedQuantity = product.quantity - quantity;

    if (updatedQuantity === 0) {
      await Product.findByIdAndDelete(product._id);
      return res
        .status(200)
        .json({ message: "Quantity zero hence roduct deleted" });
    }

    product.quantity = updatedQuantity;
    await product.save();

    res
      .status(200)
      .json({ message: "Product quantity updated", quantity: updatedQuantity });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.searchProducts = async (req, res) => {
  const query = req.query.q || "";

  try {
    const products = await Product.find({
      name: { $regex: query, $options: "i" },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
