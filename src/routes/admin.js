const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const security = require('../security/authenticationAdmin');

// newsController.index;
router.get('/',security.auth, adminController.index);


module.exports = router;