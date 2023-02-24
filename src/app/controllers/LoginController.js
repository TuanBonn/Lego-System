const Account = require('../models/Account');
const User = require('../models/User');

const {convertToObject} = require('../../util/mongoose');
const {convertToArrayObjects} = require('../../util/mongoose');
var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

class LoginController {
    //[GET] /news
    login(req, res, next) {
        res.render('login');
    }
    checkLogin(req, res, next){
        const username = req.body.username;
        const password = req.body.password;

        Account.findOne({username: username})
        .then(account=>{
            console.log(account);
            if(account===null){
                res.render('login', {
                    message: 'User doesnt exist'
                })
                return;
            }else{
                if(account.password !== password){
                    res.render('login', {
                        message: 'Password Wrong'
                    })
                    return;
                }else{
                    if(account.role === "USER"){
                        res.cookie('userId', account._id, {
                            signed: true
                        });
                        res.redirect('/');
                    }else{
                        res.render('admin/homeAdmin');
                    }
                }
            }
            
        })
        .catch(err=>console.log(err))
    }
}
//make object NewsController to use in another file
module.exports = new LoginController();
