const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/HomeController');
const security = require('../security/authentication');

// newsController.index;
router.get('/', HomeController.index);

//show product 
router.get('/product/:slug', HomeController.product);

//add to bag
router.post('/product/addToBag', security.auth, HomeController.addToBag);

//cart
router.get('/cart', security.auth, HomeController.cart);

//update Cart Item
router.get('/cart/update/:id', HomeController.updateItem);

//delete Cart Item
router.get('/cart/delete/:id', HomeController.deleteItem);














//if you want to insert data to database, use it
router.get('/insertCategory', HomeController.insertCategory);
router.get('/insertTheme', HomeController.insertTheme);
router.get('/insertProduct', HomeController.insert);
router.get('/insertAccount', HomeController.insertAccount);
router.get('/insertUser', HomeController.insertUser);
router.get('/setcookie', HomeController.testCookie);


module.exports = router;