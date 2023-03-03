const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const UserDetailController = require('../app/controllers/UserDetailController');
const security = require('../security/authenticationAdmin');

// newsController.index;
<<<<<<< HEAD
router.get('/',security.auth, adminController.index);
router.get("/theme", security.auth, adminController.goTheme);
router.get("/theme/update/:id", security.auth, adminController.goThemeUpdate);
router.post("/theme/update/:id", security.auth, adminController.doThemeUpdate);
router.get("/theme/add", security.auth, adminController.goThemeAdd);
router.post("/theme/add", security.auth, adminController.doThemeAdd);
router.get("/theme/delete/:id", security.auth, adminController.doThemeDelete);
=======
router.get('/dashboard', adminController.dashboard);

router.get('/', adminController.detail);

router.get('/logout',UserDetailController.logout);

router.get('/products', adminController.productManager);

router.get('/addProduct', adminController.addProduct);

router.post('/add',adminController.SubmitProduct);

router.get('/updateProduct/:id', adminController.updateProduct);

router.post('/update', adminController.update);

router.get('/deleteProduct/:id', adminController.deleteProduct);

router.get('/changePassword',adminController.changePassword);

router.post('/changePassword',adminController.changePasswordSave);

router.get('/products/search', adminController.searchProduct);


>>>>>>> 1248fc0b364a7bd84f3bef9f95c68f154a1ace90

module.exports = router;