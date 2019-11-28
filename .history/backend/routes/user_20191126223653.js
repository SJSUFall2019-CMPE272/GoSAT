const routes = require('express').Router();
var multer = require('multer')
const secret_key = "Passphrase for encryption should be 45-50 char long";


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

module.exports.updateDetails = (payload) => {
    return new Promise(function (resolve, reject) {
        const lastName = payload.userDetails.lastName;
        const firstName = payload.userDetails.firstName;
        const phone = payload.userDetails.phone;
        userSchema.update({ "emailId": payload.email }, {
            "userDetails.lastName": lastName,
            "userDetails.firstName": firstName,
            "userDetails.phone": phone
        }, function (error, results) {
            if (error) {
                console.log("Error in updateDetails ");
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

module.exports.routes = routes;

