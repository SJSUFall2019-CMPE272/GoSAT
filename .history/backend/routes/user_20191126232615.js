const routes = require('express').Router();
var multer = require('multer')
const secret_key = "Passphrase for encryption should be 45-50 char long";
var userService = require('./../services/userService');


routes.get('/getUserDetails/:email', (req, res) => {
    var payload = {
            email: req.params.email
        }
    userService.getUserDetails(payload)
    .then( results => {
        if (results.length != 0) {
            res.status(200).json({ success: true, message: "Fetching user details", payload: results[0].userDetails });
        } else {
            res.status(200).json({ success: true, message: "Invalid user email", payload: null });
        }
    })
    .catch( err => {
        console.log("Couldnt get user details");
        res.status(400).json({ success: false, message: err.message, payload: null });
    })
})


routes.post('/updateDetails', (req, res) => {
    var payload = {
            email: req.body.emailId,
            userDetails: req.body.userDetails,
        }
    userService.updateDetails(payload)
    .then( results => {
        const updatedUser = Object.assign({}, payload.existingDetails, payload.user);
        res.status(200).json({ success: true, message: "Updated details", payload: updatedUser });
    })
    .catch( err => {
        res.status(400).json({ success: false, message: err.message, payload: null });
    })
})



routes.post('/updatePassword', (req, res) => {
    var payload = {
            email: req.body.email,
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword
        }
    kafka.make_request('GUsers', body, function (err, results) {
        if (err) {
            res.status(500).json({ success: false, message: err.message, payload: null });
        } else {
            if (results.nModified === 1) {
                res.status(200).json({ success: true, message: "Password Updated", payload: results });
            } else {
                res.status(500).json({ success: false, message: "Invalid password", payload: null });
            }
        }
    })
})


module.exports.routes = routes;
