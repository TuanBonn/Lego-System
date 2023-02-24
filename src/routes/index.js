const homeRouter = require('./home');
const authLogin = require('./login');


function route(app) {
    app.use('/auth', authLogin);
    app.use('/', homeRouter);
}

module.exports = route;