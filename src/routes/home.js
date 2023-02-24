const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/HomeController');
const security = require('../security/authentication');

// newsController.index;
router.get('/',security.auth, HomeController.index);

//if you want to insert data to database, use it
// router.get('/insertCategory', HomeController.insertCategory);
// router.get('/insertTheme', HomeController.insertTheme);
// router.get('/insertProduct', HomeController.insert);
// router.get('/insertAccount', HomeController.insertAccount);
// router.get('/insertUser', HomeController.insertUser);
// router.get('/setcookie', HomeController.testCookie);


module.exports = router;