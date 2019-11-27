const routes = require('express').Router();
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var passport = require('passport');
var jwt = require('jsonwebtoken');
require('./../config/passport')(passport);
const secret_key = "Passphrase for encryption should be 45-50 char long";
var kafka = require('./../kafka/client');


routes.get('/logout', (req, res) => {
    res.status(200).json({})
})


routes.post('/login', (req, res) => {
    var body = {
        msg: "Login",
        payload: {
            email: req.body.emailId,
            password: req.body.password
        }
    }
    kafka.make_request('GAuth', body, function (err, results) {
        console.log(" res is ", results);
        if (err) {
            console.log("Couldnt login");
            res.status(401).json({ success: false, message: err.message, payload: null });
        } else {
            if (results.length != 0) {
                var token = jwt.sign({ email: req.body.emailId }, secret_key, {
                    expiresIn: 10080
                });
                res.status(200).json({ success: true, message: "Login Successful", payload: results[0].userDetails, token: 'JWT ' + token });
            } else {
                res.status(401).json({ success: false, message: "Invalid Credentials", payload: null });
            }
        }

    });
})



routes.post('/signUp', upload.single('displayPic'), (req, res) => {
    var userDetails = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone,
        displayPic: req.file.path,
        userType: req.body.userType,
        emailId: req.body.emailId
    }
    var body = {
        msg: "SignUp",
        payload: {
            email: req.body.emailId,
            password: req.body.password,
            userDetails: userDetails
        }
    }
    kafka.make_request('GAuth', body, function (err, results) {
        if (err) {
            res.status(500).json({ success: false, message: err.message, payload: null });
        } else {
            res.status(200).json({ success: true, message: "User successfully created", payload: null });
        }
    })
})



routes.post('/registerRestaurant', upload.single('displayPic'), (req, res) => {
    var body = {
        msg: "CreateRestaurant",
        payload: {
            name: req.body.name,
            zip: req.body.zipcode,
            phone: req.body.phone,
            cuisine: req.body.cuisine,
            address: req.body.address,
            ownerEmail: req.body.emailId,
            displayPic: req.file.path,
        }
    }
    kafka.make_request('GAuth', body, function (err, results) {
        if (err) {
            res.status(500).json({ success: false, message: err.message, payload: null })
        } else {
            res.status(200).json({ success: true, message: "Restaurant successfully registered!", payload: null });
        }
    })
});


module.exports.routes = routes;
