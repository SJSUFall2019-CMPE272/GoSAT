const routes = require('express').Router();
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
const secret_key = "Passphrase for encryption should be 45-50 char long";
var authService = require('./../services/authenticationService');

routes.get('/logout', (req, res) => {
    res.status(200).json({})
})


routes.post('/login', (req, res) => {
    var payload = {
            email: req.body.emailId,
            password: req.body.password
        }
    authService.authenticate(payload)
    .then( results => {
        if (results.length != 0) {
            res.status(200).json({ success: true, message: "Login Successful", payload: results[0] });
        } else {
            res.status(401).json({ success: false, message: "Invalid Credentials", payload: null });
        }
    })
    .catch( err => {
        console.log("Couldnt login");
            res.status(401).json({ success: false, message: err.message, payload: null });
    })
})



routes.post('/signUp', (req, res) => {
    var payload = {
            email: req.body.emailId,
            password: req.body.password,
            userDetails: req.body.userDetails,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
        console.log(" req is ",payload , req);
    authService.createUser(payload)
    .then( results => {
        res.status(200).json({ success: true, message: "User successfully created", payload: null });
    })
    .catch(err => {
        res.status(500).json({ success: false, message: err.message, payload: null });
    })
})

module.exports.routes = routes;
