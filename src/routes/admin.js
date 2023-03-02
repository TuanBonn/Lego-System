const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const security = require('../security/authenticationAdmin');

// newsController.index;
router.get('/',security.auth, adminController.index);

router.get('/products', adminController.productManager);

router.get('/addProduct', adminController.addProduct);

router.post('/add',adminController.SubmitProduct);

router.get('/updateProduct/:id', adminController.updateProduct);

router.post('/update', adminController.update);

router.get('/deleteProduct/:id', adminController.deleteProduct);




module.exports = router;