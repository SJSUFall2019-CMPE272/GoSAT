const userSchema = require('./../model/users').User;

module.exports.authenticate = (payload) => {
    return new Promise((resolve, reject) => {
        userSchema.find({
            emailId: payload.email,
            password: payload.password
        }, function (err, results) {
            if (err) {
                console.log("error in authenticate")
                reject(err);
            } else {
                if (results.length == 0) {
                    console.log("Not logged in!");
                } else {
                    console.log("logged in! ", results);
                }
                resolve(results);
            }
        })
    })
}

module.exports.createUser = (payload) => {
    return new Promise((resolve, reject) => {
        var userInstance = new userSchema({
            emailId: payload.email,
            password: payload.password,
            userDetails: payload.userDetails
        });
        userInstance.save(function (err, results) {
            if (err) {
                console.log("error in create user")
                reject(err);
            } else {
                console.log("user created! ", results);
                resolve(results);
            }
        })
    })
}


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
