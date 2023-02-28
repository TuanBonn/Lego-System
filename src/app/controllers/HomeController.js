const Product = require('../models/Product');
const Category = require('../models/Category');
const Theme = require('../models/Theme');
const Account = require('../models/Account');
const User = require('../models/User');
const Cart = require('../models/Cart');


const {convertToObject} = require('../../util/mongoose');
const {convertToArrayObjects} = require('../../util/mongoose');

const {hashPassword} = require('../../security/hash');
const {comparePassword} = require('../../security/hash');

var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

class NewsController {
    //render all products to homepage with two ways - NQT 27/2/2023
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

    product(req, res){
        Product.findOne({
            slug: req.params.slug
        }).populate('theme').populate('category')
        .then(product=>{
            Product.find({})
            .then(products=>{
                console.log({product: convertToObject(product), products});
                res.render('user/viewProduct', {product: convertToObject(product), products: convertToArrayObjects(products)})
            })
        })
        .catch(err=>console.log(err)); 
    }

    addToBag(req, res){
        if(!req.signedCookies.userId){
            res.redirect('/auth/login');
            return;
        }else{
            console.log(req.signedCookies.userId)
            const form = req.body;
            const newCartItem = new Cart();
            newCartItem.product = form.product;
            newCartItem.quantity = form.quantity;
            newCartItem.user = req.signedCookies.userId;
            console.log(newCartItem);
            Cart.findOne({user: req.signedCookies.userId, product: form.product})
            .then(cartItem=>{
                if(cartItem !== null){
                    console.log('Existed'+cartItem);
                    res.redirect('/product/'+form.slug);
                }else{
                    if(form.quantity>form.currentQuantity){
                        res.redirect('/product/'+form.slug);
                    }else if(form.quantity<1){
                        res.redirect('/product/'+form.slug);
                    }else{
                        newCartItem.save()
                        .then(()=>res.redirect('/product/'+form.slug))
                        .catch(err=>console.log(err));
                    }
                }
            })
        }
    }

    cart(req, res){
        Cart.find({user: req.signedCookies.userId}).populate('product')
        .then(carts=>{
            var total = 0;
            carts.forEach(element => {
                total = total + element.product.price * element.quantity;
            });
            res.render('user/cart', {carts: convertToArrayObjects(carts), total: total});
        }).catch(err=>console.log(err));
        
    }

    updateItem(req, res){
        res.send('updated')
    }

    deleteItem(req, res){
        res.send('deleted');
    }












    insertAdminAccount(req, res){
        // const email = req.body.email;
        // const username = req.body.username;
        // const password = req.body.password;
        // const confirmPassword = req.body.passwordConfirm;
        var password = '123';
        var email = 'bigAdmin@gmail.como'
        const acc = new Account();
        acc.role = "ADMIN";
        acc.username = 'admin';
        const hashPass = hashPassword(password);
        acc.password = hashPass;
        const us = new User();
        acc.save()
        .then(console.log("Create Account Successfully"))
        .catch(err=>console.log(err));
        var lastid = 0;
        Account.find({}).limit(1).sort({$natural:-1})
        .then(accounts=>{
        accounts.forEach(element => {
        us.account = element._id;
                        us.name = " ";
                        us.phonenumber = " ";
                        us.address = " ";
                        us.email= email;
                        us.save()
                        .then(()=>{console.log(us)
                        console.log('create user success')
                        })
                        .catch(err=>console.log(err));
        });
        }).catch(err=>console.log(err));
        res.redirect('/');
    }




    // Insert db
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
        us.account = "63fd7352bcd449ebcef10058";


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
