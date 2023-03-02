const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const UserDetailController = require('../app/controllers/UserDetailController');
const security = require('../security/authenticationAdmin');

// newsController.index;
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




module.exports = router;