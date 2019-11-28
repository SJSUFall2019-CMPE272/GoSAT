var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  emailId: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userDetails: {
    emailId: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      unique: true,
      required: true
    },
    displayPic: {
      type: String,
      required: true
    }
  },
});

var User = mongoose.model('User', UserSchema);

module.exports.User = User;