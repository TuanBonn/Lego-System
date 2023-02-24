const Account = require('../app/models/Account');

class auth{
    auth(req, res, next){
        if(!req.cookies.userId){
            res.redirect('auth/login');
            return;
        }else{
            Account.findOne({_id: req.cookies.userId})
            .then(account=>{
                if(account===null){
                    res.redirect('auth/login');
                    return;
                }else{
                    next();
                }
            })
        }
    }
}


module.exports = new auth();