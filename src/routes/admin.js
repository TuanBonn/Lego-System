const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const security = require('../security/authenticationAdmin');

// newsController.index;
router.get('/',security.auth, adminController.index);
router.get("/theme", security.auth, adminController.goTheme);
router.get("/theme/update/:id", security.auth, adminController.goThemeUpdate);
router.post("/theme/update/:id", security.auth, adminController.doThemeUpdate);
router.get("/theme/add", security.auth, adminController.goThemeAdd);
router.post("/theme/add", security.auth, adminController.doThemeAdd);
router.get("/theme/delete/:id", security.auth, adminController.doThemeDelete);

module.exports = router;