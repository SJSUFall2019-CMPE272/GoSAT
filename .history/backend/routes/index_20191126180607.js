const routes = require('express').Router();
var passport = require('passport');
require('./../config/passport')(passport);


module.exports.routes = routes;
