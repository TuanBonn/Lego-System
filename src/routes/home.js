const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/HomeController');

// newsController.index;
router.get('/', HomeController.index);

module.exports = router;