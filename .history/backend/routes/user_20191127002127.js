const routes = require('express').Router();
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


routes.post('/updateUserDetails', (req, res) => {
    var payload = {
            email: req.body.emailId,
            userDetails: req.body.userDetails,
        }
    userService.updateUserDetails(payload)
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
    userService.updatePassword(payload)
    .then( results => {
        if (results.nModified === 1) {
            res.status(200).json({ success: true, message: "Password Updated", payload: results });
        } else {
            res.status(500).json({ success: false, message: "Invalid password", payload: null });
        }
    })
    .catch( err => {
        res.status(500).json({ success: false, message: err.message, payload: null });
    })
})


module.exports.routes = routes;
