const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const protect = require('../middlewares/authMiddleware');

// Public Routes
router.post('/register', register);
router.post('/login', login);

// Protected Route
router.get('/me', protect, getUser);

module.exports = router;
