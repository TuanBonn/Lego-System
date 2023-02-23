const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Product = new Schema({
    name: {type: String, maxLength: 255},
    price: {type: Number},
    quantity: {type: Number},
    slug: {type: String, slug: 'name', unique: true},
    img1: {type: String, maxLength: 255},
    img2: {type: String, maxLength: 255},
    img3: {type: String, maxLength: 255},
})

module.exports = mongoose.model('Product', Product);