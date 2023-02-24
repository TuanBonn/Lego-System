const express = require('express');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController');

// newsController.index;
router.get('/login', LoginController.login);
router.post('/login', LoginController.checkLogin);


module.exports = router;