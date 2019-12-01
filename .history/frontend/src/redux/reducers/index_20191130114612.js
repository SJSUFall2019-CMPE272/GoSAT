import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS,
     UPDATE_PROFILE_DETAILS_SUCCESS, LOGOUT_SUCCESS, ML_PREDICTION_SUCCESS } from './../actions/actions';
const imgPath = "./../../assets/img/";
const univList = [ 
    {
        id : 0,
        name : "UC Berkeley",
        admitRate : 14.9,
        img : imgPath+"1.jpg",
        similarRanking : {
            name : "University of Southern California",
            place : "Los Angeles, CA",
            img : imgPath+"2.jpg",
            },
        similarTuition : {
            name : "University of Dayton",
            place : "Dayton, OH",
            price : 44100,
            img : imgPath+"3.jpg",
        }
    }, {
        id : 1,
        name : "UC Los Angeles",
        admitRate : 14.1,
        img : imgPath+"4.jpg",
        similarRanking : {
            name : "Washington University in St. Louis",
            place : "St. Louis, MO",
            img : imgPath+"5.jpg",
        },
        similarTuition : {
            name : "University of Tulsa",
            place : "Tulsa, OK",
            price : 42238,
            img : imgPath+"6.jpg",
        }
    }, {
        id : 2,
        name : "UC San Diego",
        admitRate : 30.2,
        img : imgPath+"7.jpg",
        similarRanking : {
            name : "Boston College",
            place : "Chestnut Hill, MA",
            img : imgPath+"8.jpg",
        },
        similarTuition : {
            name : "University of La Verne",
            place : "La Verne, CA",
            price : 44500,
            img : imgPath+"9.jpg",
        }
    },{
        id : 3,
        name : "UC Santa Barbara",
        admitRate : 32.3,
        img : imgPath+"10.jpg",
        similarRanking : {
            name : "University of Rochester",
            place : "Rochester, NY",
            img : imgPath+"11.jpg",
        },
        similarTuition : {
            name : "Marquette University",
            place : "Milwaukee, WI",
            price : 43936,
            img : imgPath+"12.jpg",
        }
    },{
        id : 4,
        name  : "UC Davis",
        admitRate : 41.2,
        img : imgPath+"13.jpg",
        similarRanking : {
            name  : "Boston University",
            place : "Boston, MA",
            img : imgPath+"14.jpg",
        },
        similarTuition : {
            name : "Seton Hall University",
            place : "South Orange, NJ",
            price : 43780,
            img : imgPath+"15.jpg",
        }
    },{
        id : 5,
        name  : "UC Irvine",
        admitRate : 28.8,
        img : imgPath+"16.jpg",
        similarRanking : {
            name  : "University of Florida",
            place : "Gainesville, FL",
            img : imgPath+"17.jpg",
        },
        similarTuition : {
            name : "University of Vermont",
            place : "Burlington, VT",
            price : 43690,
            img : imgPath+"18.jpg",
        }
    },{ 
        id : 6,
        name  : "UC Santa Cruz",
        admitRate : 47.7,
        img : imgPath+"19.jpg",
        similarRanking : {
            name  : "North Carolina State University",
            place : "Raleigh, NC",
            img : imgPath+"20.jpg",
        },
        similarTuition : {
            name : "Sacred Heart University",
            place : "Fairfield, CT",
            price : 43070,
            img : imgPath+"21.jpg",
        }
    },{
        id : 7,
        name  : "UC Riverside",
        admitRate : 50.9,
        img : imgPath+"22.jpg",
        similarRanking : {
            name  : "Stony Brook University--SUNY",
            place : "Stony Brook, NY",
            img : imgPath+"23.jpg",
        },
        similarTuition : {
            name : "Drake University",
            place : "Des Moines, IA",
            price : 42840,
            img : imgPath+"24.jpg",
        }
    },{
        id : 8,
        name  : "UC Merced",
        admitRate : 66.9,
        img : imgPath+"25.jpg",
        similarRanking : {
            name  : "Temple University",
            place : "Philadelphia, PA",
            img : imgPath+"26.jpg",
        },
        similarTuition : {
            name : "University of St. Thomas",
            place : "St. Paul, MN",
            price : 42736,
            img : imgPath+"27.jpg",
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