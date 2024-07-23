const express = require('express');
const router = express.Router();
const { getAllBooks, getUserBooks, addBook } = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/books', getAllBooks);
router.get('/user/books', authMiddleware, getUserBooks);
router.post('/books', authMiddleware, addBook);

module.exports = router;
