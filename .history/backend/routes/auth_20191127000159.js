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
            var token = jwt.sign({ email: req.body.emailId }, secret_key, {
                expiresIn: 10080
            });
            res.status(200).json({ success: true, message: "Login Successful", payload: results[0].userDetails, token: 'JWT ' + token });
        } else {
            res.status(401).json({ success: false, message: "Invalid Credentials", payload: null });
        }
    })
    .catch( err => {
        console.log("Couldnt login");
            res.status(401).json({ success: false, message: err.message, payload: null });
    })
})



routes.post('/signUp', /*upload.single('displayPic'),*/ (req, res) => {
    // var userDetails = {
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     emailId: req.body.emailId
    // }
    var payload = {
            email: req.body.emailId,
            password: req.body.password,
            userDetails: req.body.userDetails
        }
    authService.createUser(payload)
    .then( results => {
        res.status(200).json({ success: true, message: "User successfully created", payload: null });
    })
    .catch(err => {
        res.status(500).json({ success: false, message: err.message, payload: null });
    })
})

module.exports.routes = routes;
