const Product = require('../models/Product');
const Category = require('../models/Category');
const Theme = require('../models/Theme');
const Account = require('../models/Account');
const User = require('../models/User');

const {convertToObject} = require('../../util/mongoose');
const {convertToArrayObjects} = require('../../util/mongoose');
var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

class NewsController {
    //[GET] /news
    index(req, res, next) {
        // async function hi(){
        //     let client = await MongoClient.connect(url);
        //     let db = client.db("lego_shopping");
        //     let products = await db.collection("products").find().toArray();
        //     res.render('home', {'products': products});
        // }
        Product.find({}).populate('category').populate('theme')
        .then(products=>{
            res.render('home', {products: convertToArrayObjects(products)})
        }).catch(next)
        // hi();
        
    }

    insertTheme(req, res, next){
        const cate = new Theme();
        cate.name = "DC";
        cate.description = "hahaha";
        cate.img = "1";

        cate.save().then(()=>{
            console.log('Insert Success');
            res.redirect('/');
        }).catch(err=>console.log(err));
    }

    insertCategory(req, res, next){
        const cate = new Category();
        cate.name = "Do Choi";
        cate.description = "hahaha";
        cate.img = "1";

        cate.save().then(()=>{
            console.log('Insert Success');
            res.redirect('/');
        }).catch(err=>console.log(err));
    }

    insert(req, res, next){
        const prod = new Product();
        prod.name = "Lego";
        prod.age = 2;
        prod.price = 120000;
        prod.quantity = 30;
        prod.slug = "Lego";
        prod.img1 = "1";
        prod.img2 = "2";
        prod.img3 = "3";
        prod.description = "hahaha";
        prod.status = "EXIST";
        prod.ratting = 3;
        prod.theme = "63f78061c3fda0dcf591d857";
        prod.category = "63f77f0cc3fda0dcf591d855"
        prod.save().then(()=>{
            console.log('Insert Success');
            res.redirect('/');
        }).catch(err=>console.log(err));
    }

    insertAccount(req, res, next){
        const acc = new Account();
        acc.role = "USER";
        acc.password = "123";
        acc.username = "hehe";

        acc.save().then(()=>{
            console.log('Insert Success');
            res.redirect('/');
        }).catch(err=>console.log(err));
    }

    insertUser(req, res, next){
        const us = new User();
        us.name = "Nice";
        us.phonenumber = "0123456789";
        us.email = "alo@gmail.com";
        us.address = "alo - alo - alo - HN";
        us.account = "63f784f0fe0aa17dd9f2e562";


        us.save().then(()=>{
            console.log('Insert Success');
            res.redirect('/');
        }).catch(err=>console.log(err));
    }

    testCookie(req, res, next){
        res.cookie('user', "1234");
        res.send('HI');
        console.log(req.cookies);
    }
}
//make object NewsController to use in another file
module.exports = new NewsController();
