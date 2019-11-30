const routes = require('express').Router();
var multer = require('multer')
var passport = require('passport');
var jwt = require('jsonwebtoken');
require('./../config/passport')(passport);
const secret_key = "Passphrase for encryption should be 45-50 char long";
var requireAuth = passport.authenticate('jwt', { session: false });
var kafka = require('./../kafka/client');


routes.get('./getChat/:orderId', requireAuth, (req, res) => {
    var body = {
        msg: "GetChat",
        payload: {
            orderId: req.params.orderId
        }
    }
    if (body.payload.orderId == undefined) {
        res.status(400).json({ success: false, message: "OrderId undefined", payload: null });
    } else {
        kafka.make_request('GOrders', body, function (err, results) {
            if (err) {
                res.status(500).json({ success: false, message: err.message, payload: null });
            } else {
                res.status(200).json({ success: true, message: "Fetching chat", payload: results });
            }
        })
    }
})



routes.get('/getRestaurants', requireAuth, (req, res) => {
    var body = {
        msg: "GetRestaurants",
        payload: {}
    }
    kafka.make_request('GRest', body, function (err, results) {
        if (err) {
            res.status(500).json({ success: false, message: err.message, payload: null });
        } else {
            res.status(200).json({ success: true, message: "Fetching restaurants", payload: results });
        }
    })
})



routes.get('/getUserDetails/:email', requireAuth, (req, res) => {
    var body = {
        msg: "GetUserDetails",
        payload: {
            email: req.params.email
        }
    }
    kafka.make_request('GUsers', body, function (err, results) {
        if (err) {
            console.log("Couldnt get user details");
            res.status(400).json({ success: false, message: err.message, payload: null });
        } else {
            if (results.length != 0) {
                res.status(200).json({ success: true, message: "Fetching user details", payload: results[0].userDetails });
            } else {
                res.status(200).json({ success: true, message: "Invalid user email", payload: null });
            }
        }
    })
})



routes.post('/updatePassword', requireAuth, (req, res) => {
    var token = req.headers.authorization.substr(7);
    var payload = jwt.verify(token, secret_key);
    var emailId = payload.email;
    var body = {
        msg: "UpdatePassword",
        payload: {
            email: emailId,
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword
        }
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



routes.post('/placeOrder', requireAuth, (req, res) => {
    var token = req.headers.authorization.substr(7);
    var payload = jwt.verify(token, secret_key)
    var body = {
        msg: "PlaceOrder",
        payload: {
            email: payload.email,
            restName: req.body.restName,
            orderItems: req.body.orderItems,
            deliveryDetails: req.body.deliveryDetails,
            restPic: req.body.restPic
        }
    }
    if (body.payload.restName == undefined || body.payload.orderItems == undefined || body.payload.deliveryDetails == undefined) {
        res.status(500).json({ success: false, message: "rest name or order items or delivery details undefined", payload: null });
    } else {
        kafka.make_request('GOrders', body, function (err, results) {
            if (err) {
                res.status(500).json({ success: false, message: err.message, payload: null });
            } else {
                res.status(200).json({ success: true, message: "Order Placed", payload: null });
            }
        })
    }
})



routes.get('/pastOrders/:emailId', requireAuth, (req, res) => {
    var body = {
        msg: "PastOrdersByBuyerEmail",
        payload: {
            email: req.params.emailId
        }
    }
    if (body.payload.email == undefined) {
        res.status(400).json({ success: false, message: "Email id undefined", payload: null });
    } else {
        kafka.make_request('GOrders', body, function (err, results) {
            if (err) {
                res.status(400).json({ success: false, message: err.message, payload: null });
            } else {
                res.status(200).json({ success: true, message: "Fetching past orders", payload: results });
            }
        })
    }
})



routes.get('/upcomingOrders/:emailId', requireAuth, (req, res) => {
    var body = {
        msg: "UpcomingOrdersByBuyerEmail",
        payload: {
            email: req.params.emailId
        }
    }
    if (body.payload.email == undefined) {
        res.status(400).json({ success: false, message: "Email id undefined", payload: null });
    } else {
        kafka.make_request('GOrders', body, function (err, results) {
            if (err) {
                res.status(400).json({ success: false, message: err.message, payload: null });
            } else {
                res.status(200).json({ success: true, message: "Fetching upcoming orders", payload: results });
            }
        })
    }
})



routes.post('/updateDetails', requireAuth, (req, res) => {
    var token = req.headers.authorization.substr(7);
    var payload = jwt.verify(token, secret_key);
    var emailId = payload.email;
    var body = {
        msg: "UpdateDetails",
        payload: {
            email: emailId,
            userDetails: req.body.userDetails,
        }
    }
    kafka.make_request('GUsers', body, function (err, results) {
        if (err) {
            res.status(400).json({ success: false, message: err.message, payload: null });
        } else {
            const updatedUser = Object.assign({}, body.payload.existingDetails, body.payload.user);
            res.status(200).json({ success: true, message: "Updated details", payload: updatedUser });
        }
    })
})



routes.get('/getRestDetailsByRestName/:restName', requireAuth, (req, res) => {
    var body = {
        msg: "GetRestDetailsByRestName",
        payload: {
            restName: req.params.restName
        }
    }
    kafka.make_request('GRest', body, function (err, results) {
        if (err) {
            res.status(400).json({ success: false, message: err.message, payload: null });
        } else {
            res.status(200).json({ success: true, message: "Fetching Rest Details", payload: results });
        }
    })
});



routes.post('/search', requireAuth, (req, res) => {
    var body = {
        msg: "Search",
        payload: {
            name: req.body.name,
            item: req.body.item,
            cuisine: req.body.cuisine
        }
    }
    kafka.make_request('GRest', body, function (err, results) {
        if (err) {
            res.status(400).json({ success: false, message: err.message, payload: null });
        } else {
            res.status(200).json({ success: true, message: "Fetching search results", payload: results });
        }
    })
})


module.exports.routes = routes;

