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
  },
  displayPic: {
    type: String,
  },
  dreamUniv : {
    type : String
  },
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
      mathScore : {
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
      elaScore : {
        type  : Number
      },
    },
    agc : {
      type : Number
    },
    hc : {
      type  : Number
    },
    ethnicity : {
      type : String
    },
    transferStudent : {
      type : Boolean
    }  
  },
  results : [{
    id : {
      type : Number,
    },
    img : {
      type : String
    }
    name : {
      type : String
    },
    admitRate : {
      type : Number
    },
    similarRanking : {
      name : {
        type : String
      },
      place : {
        type : String
      }
    },
    similarTuition : {
      name : {
        type : String
      },
      place : {
        type : String
      },
      price : {
        type : Number
      }
    },
    score : {
      type : Number
    }
  }]
});

var User = mongoose.model('User', UserSchema);

module.exports.User = User;