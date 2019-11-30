const routes = require('express').Router();
var passport = require('passport');
require('./../config/passport')(passport);
var auth = require('./auth').routes;

routes.use('/auth', auth);


module.exports.routes = routes;
