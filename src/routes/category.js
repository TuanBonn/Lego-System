const express = require('express');
const router = express.Router();

const adminCategory = require('../app/controllers/AdminCategory');
const security = require('../security/authenticationAdmin');

// newsController.index;
router.get('/', adminCategory.index);
router.get('/add', adminCategory.category);
router.post('/add', adminCategory.addCategory)
router.get('/delete/:id', adminCategory.deleteCategory)
router.get('/edit/:id', adminCategory.viewCategory)
router.post('/edit', adminCategory.editCategory)



module.exports = router;