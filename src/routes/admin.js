const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

// newsController.index;
router.get('/con', adminController.index);


module.exports = router;