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
  emailId: {
    type: String,
    unique: true,
    required : true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
  displayPic: {
    type: String,
  },
  dreamUniv : [ {
    type : String
  }],
  profileDetails: {
    cgpa : {
      type : Number,
    },
    sat : {
      status : {
        type : String
      },
      date : {

      },
      readingWritingScore : {
        type: Number,
      },
      essayScore : {
        type : Number
      },
      Subject1Score : {
        type  : Number
      },
      Subject2Score : {
        type  : Number
      }
    },
    act : {
      status : {
        type : String
      },
      compositeScore : {
        type  : Number
      },
      writingScore : {
        type  : Number
      },
    },
    ethnicity : {
      type : String
    },
    transferStudent : {
      type : Boolean
    }  
  },
});

var User = mongoose.model('User', UserSchema);

module.exports.User = User;