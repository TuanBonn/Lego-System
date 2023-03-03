const Account = require('../models/Account');
const User = require('../models/User');
const express = require('express');
const router = express.Router();
const product = require('../models/Product');
const mongoose = require('mongoose')

const {convertToObject} = require('../../util/mongoose');
const {convertToArrayObjects} = require('../../util/mongoose');

const {hashPassword} = require('../../security/hash');
const {comparePassword} = require('../../security/hash');

const { ObjectId } = require('mongodb');

const { response } = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;



class LoginController {
    
    detail(req, res) {
        User.findOne({account: new ObjectId(req.signedCookies.adminId)}).populate('account').then(user=>{
           User.find({}).then(users=>{
            // console.log({user: convertToObject(user),users});
            res.render('admin/detail',{admin: true,user:convertToObject(user),users:convertToArrayObjects(users)})
           })
        })
        .catch(err=>console.log(err))
    }

  

    //[GET] /news
    index(req, res) {
        res.render('admin/homeAdmin', {admin: true});
    }   
    
    
    productManager(req, res, next) {
        // User.find((err, users) => {
        //     if (err) return res.status(500).send(err);
        //     res.send(users);
        //   });

        //View all products
        product.find({}, (error, data)=>{
            //console.log('danh sach product', data);
            res.render('admin/products', {admin:true, products: convertToArrayObjects(data)});
        });
       
        // router.get('/',async (req,res)=>{
        //     let client = await MongoClient.connect(url)
        //     let dbo = client.db("lego_shopping")
        //     let productList = await dbo.collection("products").find().toArray()
        //     res.render('admin/products',{'productList':productList})
        // })
        
        // Product.find({})
        // .then(Products => res.render('admin/products', {
        //     Products : Products.map(Produc   ts => Products.toObject())
        // }))
    }

    //add product
    addProduct(req, res, next) {
        //product.create(req.body);
        res.render('admin/addProduct', {admin:true})
        //res.redirect('admin/products');
    }
    SubmitProduct(req, res, next) {
        // product.create(req.body);
        // res.redirect('/admin/products');
        const form = req.body;
        const newProduct = new product();
        newProduct.name = form.name;
        newProduct.age = form.age;
        newProduct.price = form.price;
        newProduct.quantity = form.quantity;
        newProduct.description = form.description;
        newProduct.ratting = form.ratting;
        newProduct.save().then(res.redirect('/admin/products'))
    }

    //update product
    updateProduct(req, res, next) {
        product.findById(req.params.id, (error, data) => {
            res.render('admin/updateProduct', {admin:true, Product:convertToObject(data)})
        })
    }
    update(req, res, next) {
        console.log('demo',req.body);
        product.findByIdAndUpdate(req.body.id, req.body, (error, data) =>{
            res.redirect('/admin/products');
        })
    }

    //delete product
    deleteProduct(req, res, next) {
        product.findByIdAndDelete(req.params.id, (error, data) => {
            res.redirect('/admin/products');
        })
    }

    //search product





    // Change Password Admin
    changePassword(req,res){
        res.render('admin/changePassword',{admin:true}) ;
     }
 
     changePasswordSave(req,res){
         Account.findOne({
             _id:req.signedCookies.adminId
         }).then(account=>{
             const isPassword = comparePassword(req.body.currentPassword,account.password) 
             if(isPassword){
                 const newPassword = hashPassword(req.body.newPassword) ;
                 Account.updateOne({_id:req.signedCookies.adminId},{password:newPassword}).then(
                     res.render('admin/changePassword',)
                 )
             }else{
                 res.render('admin/changePassword',{admin:true}, {
                     message: 'Password Wrong'
                 })
             }
         })
     }
}

    

//make object NewsController to use in another file
module.exports = new LoginController();
