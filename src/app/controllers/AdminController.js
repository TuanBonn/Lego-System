const Account = require('../models/Account');
const User = require('../models/User');

const {convertToObject} = require('../../util/mongoose');
const {convertToArrayObjects} = require('../../util/mongoose');
var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

class LoginController {
    //[GET] /news
    index(req, res) {
        res.render('admin/homeAdmin');
    }
}
//make object NewsController to use in another file
module.exports = new LoginController();
