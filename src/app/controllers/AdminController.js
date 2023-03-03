const Account = require('../models/Account');
const User = require('../models/User');
const Theme = require('../models/Theme');

const {convertToObject} = require('../../util/mongoose');
const {convertToArrayObjects} = require('../../util/mongoose');
var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

class AdminController {
    //[GET] /news
    index(req, res) {
        res.render('admin/homeAdmin', {admin: true});
    }
    async goTheme(req, res){
        const themes = await Theme.find();
        res.render("admin/theme/index", {admin: true, themes: convertToArrayObjects(themes)})
    }
    async goThemeUpdate(req, res){
        const theme = await Theme.findById(req.params.id);
        const themes = await Theme.findById();
        res.render("admin/theme/update", {admin: true, theme: convertToObject(theme)})
    }
    async doThemeUpdate(req, res){
        var theme = new Theme({
            _id: req.params.id,
            name: req.body.name,
            description: req.body.description,
            img: req.body.img
        })
        var upsetData = theme.toObject()
        delete upsetData._id
        await Theme.update({_id: req.params.id}, upsetData, {upsert: true})
        res.redirect("/admin/theme")
    }
    async goThemeAdd(req, res){
        res.render("admin/theme/add", {admin: true})
    }
    async doThemeAdd(req, res){
        const theme = new Theme()
        theme.name = req.body.name
        theme.description = req.body.description
        theme.img = req.body.img
        await theme.save()
        res.redirect("/admin/theme")
    }
    async doThemeDelete(req, res){
        await Theme.remove({_id: req.params.id})
        res.redirect("/admin/theme")
    }
}
//make object NewsController to use in another file
module.exports = new AdminController();
