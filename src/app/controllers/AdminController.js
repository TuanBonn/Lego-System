const Account = require('../models/Account');
const User = require('../models/User');

const {convertToObject} = require('../../util/mongoose');
const {convertToArrayObjects} = require('../../util/mongoose');
const { ObjectId } = require('mongodb');
var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

class LoginController {
    
    detail(req, res) {
        User.findOne({account: new ObjectId(req.signedCookies.adminId)}).populate('account').then(user=>{
           User.find({}).then(users=>{
            // console.log({user: convertToObject(user),users});
            res.render('admin/detail',{user:convertToObject(user),users:convertToArrayObjects(users),admin:true})
           })
        })
        .catch(err=>console.log(err))
    }

  
}
//make object NewsController to use in another file
module.exports = new LoginController();
