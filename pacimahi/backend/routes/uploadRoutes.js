const express = require('express');
const router = express.Router();
const { uploadImage, uploadDocument } = require('../middleware/upload');
const authMiddleware = require('../middleware/auth');
const { uploadImage: uploadImageCtrl, uploadDocument: uploadDocCtrl } = require('../controllers/uploadController');

// Middleware untuk menangani error dari multer
const handleImageUpload = (req, res, next) => {
  uploadImage.single('image')(req, res, (err) => {
    if (err) return res.status(400).json({ success: false, message: err.message });
    next();
  });
};

const handleDocUpload = (req, res, next) => {
  uploadDocument.single('document')(req, res, (err) => {
    if (err) return res.status(400).json({ success: false, message: err.message });
    next();
  });
};

// Protected routes (hanya admin yang login yang bisa upload)
router.post('/', authMiddleware, handleImageUpload, uploadImageCtrl);
router.post('/document', authMiddleware, handleDocUpload, uploadDocCtrl);

module.exports = router;
