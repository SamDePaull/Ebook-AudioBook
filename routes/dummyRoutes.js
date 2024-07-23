const express = require('express');
const router = express.Router();
const dummyController = require('../controllers/dummyController');

router.post('/dummy/books', dummyController.createDummyBooks);

module.exports = router;
