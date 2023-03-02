const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const UserDetailController = require('../app/controllers/UserDetailController');
const security = require('../security/authenticationAdmin');

// newsController.index;
router.get('/', adminController.detail);
router.get('/logout',UserDetailController.logout);


module.exports = router;