const routes = require('express').Router();
var auth = require('./auth').routes;
var user = require('./user').routes;

routes.use('/auth', auth);
routes.use('/user',user);

routes.get('/',(req,res) => {
    res.status(200).json({});
})
module.exports.routes = routes;
