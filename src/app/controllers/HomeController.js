const Product = require('../models/Product');

const {convertToObject} = require('../../util/mongoose');
const {convertToArrayObjects} = require('../../util/mongoose');
var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

class NewsController {
    //[GET] /news
    index(req, res, next) {
        async function hi(){
            let client = await MongoClient.connect(url);
            let db = client.db("lego_shopping");
            let products = await db.collection("products").find().toArray();
            res.render('home', {'products': products});
        }
        // Product.find({})
        // .then(products=>{
        //     res.render('home', {products: convertToArrayObjects(products)})
        // }).catch(next)
        hi();
        
    }
}
//make object NewsController to use in another file
module.exports = new NewsController();
