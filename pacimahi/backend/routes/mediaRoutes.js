const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { checkRole } = require('../middleware/auth');
const { uploadImage } = require('../middleware/upload');
const {
  getMedia,
  createMedia,
  updateMedia,
  deleteMedia
} = require('../controllers/mediaController');

const handleMediaUpload = (req, res, next) => {
  uploadImage.single('image')(req, res, (err) => {
    if (err) return res.status(400).json({ success: false, message: err.message });
    next();
  });
};

router.get('/', authMiddleware, getMedia);
router.post('/', authMiddleware, checkRole(['superadmin', 'admin', 'editor']), handleMediaUpload, createMedia);
router.put('/:id', authMiddleware, checkRole(['superadmin', 'admin', 'editor']), updateMedia);
router.delete('/:id', authMiddleware, checkRole(['superadmin', 'admin']), deleteMedia);

module.exports = router;
