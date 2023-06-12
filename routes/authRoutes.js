const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

router.post(
  '/register',
  [
    check('username', 'Username is required').notEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
  ],
  authController.register
);

router.post(
  '/login',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').notEmpty(),
  ],
  authController.login
);

module.exports = router;
