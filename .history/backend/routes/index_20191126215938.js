const routes = require('express').Router();
var auth = require('./auth').routes;

routes.use('/auth', auth);
routes.use('/user',user);


module.exports.routes = routes;
