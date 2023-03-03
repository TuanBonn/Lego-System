const homeRouter = require('./home');
const authLogin = require('./login');
const adminRouter = require('./admin');
const categoryRouter = require('./category');


function route(app) {
    app.use('/auth', authLogin);
    app.use('/', homeRouter);
    app.use('/admin', adminRouter);
    app.use('/category', categoryRouter);
}
module.exports = route;