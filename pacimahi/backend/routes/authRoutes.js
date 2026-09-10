const express = require('express');
const router = express.Router();
const { login, getMe, updateProfile, changePassword } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth/me (protected)
router.get('/me', authMiddleware, getMe);

// PUT /api/auth/profile (protected)
router.put('/profile', authMiddleware, updateProfile);

// PUT /api/auth/password (protected)
router.put('/password', authMiddleware, changePassword);

module.exports = router;
