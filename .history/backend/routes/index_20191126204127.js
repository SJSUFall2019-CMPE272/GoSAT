const routes = require('express').Router();
var auth = require('./auth').routes;

routes.use('/auth', auth);


module.exports.routes = routes;
