import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS,
     UPDATE_PROFILE_DETAILS_SUCCESS, LOGOUT_SUCCESS, ML_PREDICTION_SUCCESS } from './../actions/actions';
const imgPath = "./../../assets/img/";
const univList = [ 
    {
        id : 0,
        name : "UC Berkeley",
        admitRate : 14.9,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name : "University of Southern California",
            place : "Los Angeles, CA",
            imgPath = imgPath+"1.jpg",
            },
        similarTuition : {
            name : "University of Dayton",
            place : "Dayton, OH",
            price : 44100,
            imgPath = imgPath+"1.jpg",
        }
    }, {
        id : 1,
        name : "UC Los Angeles",
        admitRate : 14.1,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name : "Washington University in St. Louis",
            place : "St. Louis, MO",
            imgPath = imgPath+"1.jpg",
        },
        similarTuition : {
            name : "University of Tulsa",
            place : "Tulsa, OK",
            price : 42238,
            imgPath = imgPath+"1.jpg",
        }
    }, {
        id : 2,
        name : "UC San Diego",
        admitRate : 30.2,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name : "Boston College",
            place : "Chestnut Hill, MA",
            imgPath = imgPath+"1.jpg",
        },
        similarTuition : {
            name : "University of La Verne",
            place : "La Verne, CA",
            price : 44500,
            imgPath = imgPath+"1.jpg",
        }
    },{
        id : 3,
        name : "UC Santa Barbara",
        admitRate : 32.3,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name : "University of Rochester",
            place : "Rochester, NY",
            imgPath = imgPath+"1.jpg",
        },
        similarTuition : {
            name : "Marquette University",
            place : "Milwaukee, WI",
            price : 43936,
            imgPath = imgPath+"1.jpg",
        }
    },{
        id : 4,
        name  : "UC Davis",
        admitRate : 41.2,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name  : "Boston University",
            place : "Boston, MA",
            imgPath = imgPath+"1.jpg",
        },
        similarTuition : {
            name : "Seton Hall University",
            place : "South Orange, NJ",
            price : 43780,
            imgPath = imgPath+"1.jpg",
        }
    },{
        id : 5,
        name  : "UC Irvine",
        admitRate : 28.8,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name  : "University of Florida",
            place : "Gainesville, FL",
            imgPath = imgPath+"1.jpg",
        },
        similarTuition : {
            name : "University of Vermont",
            place : "Burlington, VT",
            price : 43690,
            imgPath = imgPath+"1.jpg",
        }
    },{ 
        id : 6,
        name  : "UC Santa Cruz",
        admitRate : 47.7,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name  : "North Carolina State University",
            place : "Raleigh, NC",
            imgPath = imgPath+"1.jpg",
        },
        similarTuition : {
            name : "Sacred Heart University",
            place : "Fairfield, CT",
            price : 43070,
            imgPath = imgPath+"1.jpg",
        }
    },{
        id : 7,
        name  : "UC Riverside",
        admitRate : 50.9,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name  : "Stony Brook University--SUNY",
            place : "Stony Brook, NY",
            imgPath = imgPath+"1.jpg",
        },
        similarTuition : {
            name : "Drake University",
            place : "Des Moines, IA",
            price : 42840,
            imgPath = imgPath+"1.jpg",
        }
    },{
        id : 8,
        name  : "UC Merced",
        admitRate : 66.9,
        imgPath = imgPath+"1.jpg",
        similarRanking : {
            name  : "Temple University",
            place : "Philadelphia, PA",
            imgPath = imgPath+"1.jpg",
        },
        similarTuition : {
            name : "University of St. Thomas",
            place : "St. Paul, MN",
            price : 42736,
            imgPath = imgPath+"1.jpg",
        }
    }
]

function app(state = { univList , isLoggedIn : false}, action) {
    switch(action.type){
        case LOGIN_SUCCESS :
            return Object.assign({}, state, {
                emailId: action.payload.payload.emailId,
                firstName: action.payload.payload.firstName,
                lastName: action.payload.payload.lastName,
                phone: action.payload.payload.phone,
                isLoggedIn: true,
                displayPic: action.payload.payload.displayPic,
                profileDetails : action.payload.payload.profileDetails,
                dreamUniv : action.payload.payload.dreamUniv,
                results : action.payload.payload.results
            })
        case ML_PREDICTION_SUCCESS :
            return Object.assign({},state,{
                results : action.payload
            })
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case SIGNUP_SUCCESS:
        case LOGOUT_SUCCESS:
            return Object.assign({},state, { isLoggedIn: false, emailId: null, firstName: null })
        case UPDATE_PROFILE_DETAILS_SUCCESS:
            return Object.assign({},state,{
                profileDetails : action.payload.profileDetails
            })
        default:
            return state;

    }
}

export default combineReducers({ app});