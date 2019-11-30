const userSchema = require('./../models/users').User;

function handle_request(body, callback) {

    console.log("Inside book kafka backend");
    console.log(JSON.stringify(body));
    switch (body.msg) {
        case "Login":
            authenticate(body.payload)
                .then((results) => {
                    callback(null, results);
                    return;
                }).catch((err) => {
                    callback(err.message, null);
                    return; 
                })
            break;
        case "SignUp":
            createUser(body.payload)
                .then((results) => {
                    callback(null, results);
                    return;
                }).catch((err) => {
                    callback(err.message, null);
                    return;
                })
            break;
        case "FindUser":
            findUser(body.payload)
                .then((results) => {
                    callback(null, results);
                    return;
                }).catch((err) => {
                    callback(err.message, null);
                    return;
                })
            break;
        case "CreateRestaurant":
            createRestaurant(body.payload)
                .then((results) => {
                    callback(null, results);
                    return;
                }).catch((err) => {
                    callback(err.message, null);
                    return;
                })
            break;
        default:
            defaultFunc(body.payload);
            break;
    }
    console.log("after callback");
};

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

module.exports.findUser = (payload) => {
    return new Promise((resolve, reject) => {
        userSchema.find({
            emailId: payload.email
        }, function (err, results) {
            if (err) {
                reject("Invalid Credentials!");
            }
            resolve(results);
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

var createRestaurant = (payload) => {
    return new Promise((resolve, reject) => {
        var restInstance = new restSchema({
            name: payload.name,
            zip: payload.zip,
            phone: payload.phone,
            cuisine: payload.cuisine,
            address: payload.address,
            ownerEmail: payload.ownerEmail,
            displayPic: payload.displayPic,
        });
        restInstance.save(function (err, results) {
            if (err) {
                console.log("Error occurred in createRestaurant.");
                reject(err);
            } else {
                console.log("Restaurant created ", results);
                resolve(results);
            }
        })
    })
}

var defaultFunc = (payload) => {
    console.log("payload recieved is ", JSON.stringify(payload));
    return;
}


module.exports.handle_request = handle_request;