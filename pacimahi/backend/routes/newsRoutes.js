const express = require('express');
const router = express.Router();
const { 
  getNews, 
  getNewsBySlug, 
  getAllNews, 
  createNews, 
  updateNews, 
  deleteNews 
} = require('../controllers/newsController');
const authMiddleware = require('../middleware/auth');

// Public routes
router.get('/', getNews);
router.get('/:slug', getNewsBySlug);

// Protected routes (admin panel)
router.get('/admin/all', authMiddleware, getAllNews);
router.post('/', authMiddleware, createNews);
router.put('/:id', authMiddleware, updateNews);
router.delete('/:id', authMiddleware, deleteNews);

module.exports = router;
