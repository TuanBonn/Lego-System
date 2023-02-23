const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/HomeController');

// newsController.index;
router.get('/', HomeController.index);
router.get('/insertCategory', HomeController.insertCategory);
router.get('/insertTheme', HomeController.insertTheme);
router.get('/insertProduct', HomeController.insert);
router.get('/insertAccount', HomeController.insertAccount);
router.get('/insertUser', HomeController.insertUser);


module.exports = router;