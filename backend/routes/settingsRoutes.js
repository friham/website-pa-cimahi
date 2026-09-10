const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/settingsController');
const authMiddleware = require('../middleware/auth');

// Public route to fetch site settings
router.get('/', getSettings);

// Protected route for admin to update site settings
router.put('/', authMiddleware, updateSettings);

module.exports = router;
