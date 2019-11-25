const userSchema = require('./../model/users').User;

module.exports.updateUserDetails = (payload) => {
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

module.exports.getUserDetails = (payload) => {
    return new Promise(function (resolve, reject) {
        userSchema.find({
            emailId: payload.email
        }, function (err, results) {
            if (err) {
                console.log("error in getUserDetails");
                reject("error");
            } else {
                resolve(results);
            }
        })
    })
}

module.exports.updatePassword = (payload) => {
    return new Promise(function (resolve, reject) {
        userSchema.update({ "emailId": payload.email, "password": payload.oldPassword }, {
            "password": payload.newPassword
        }, function (error, results) {
            if (error) {
                console.log("Error in updatePassword");
                reject("error");
            } else {
                resolve(results);
            }
        })
    })
}

module.exports.updateProfileDetails = (payload) => {
    return new Promise(function (resolve, reject) {
        userSchema.update({ "emailId": payload.email}, {
            "profileDetails": payload.profileDetails
        }, function (error, results) {
            if (error) {
                console.log("Error in updateProfileDetails");
                reject("error");
            } else {
                resolve(results);
            }
        })
    })
}