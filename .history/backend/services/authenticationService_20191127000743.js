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
            firstName: payload.firstName,
            lastName : payload.lastName,
            
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




