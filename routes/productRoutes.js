const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/auth');

router.post(
  '/',
  authMiddleware,
  [
    check('name', 'Name is required').notEmpty(),
    check('description', 'Description is required').notEmpty(),
    check('price', 'Price is required').isNumeric(),
  ],
  productController.createProduct
);

router.get('/search', productController.searchProducts);

module.exports = router;
