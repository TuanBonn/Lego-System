const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/HomeController');
const security = require('../security/authentication');

// newsController.index;
router.get('/', HomeController.index);

//show product 
router.get('/product/:slug', HomeController.product);

//add to bag
router.post('/product/addToBag', HomeController.addToBag);

//cart
router.get('/cart', security.auth, HomeController.cart);

//update Cart Item
router.post('/cart/update/', security.auth, HomeController.updateItem);

//delete Cart Item
router.post('/cart/delete/', security.auth, HomeController.deleteItem);



router.get('/cart/payment', security.auth, HomeController.payment);










//if you want to insert data to database, use it
router.get('/insertCategory', HomeController.insertCategory);
router.get('/insertTheme', HomeController.insertTheme);
router.get('/insertProduct', HomeController.insert);
router.get('/insertAccount', HomeController.insertAccount);
router.get('/insertUser', HomeController.insertUser);
router.get('/setcookie', HomeController.testCookie);
router.get('/insertAdmin', HomeController.insertAdminAccount);


module.exports = router;