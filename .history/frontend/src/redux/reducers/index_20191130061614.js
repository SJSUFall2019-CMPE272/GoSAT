import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS,
     UPDATE_PROFILE_DETAILS_SUCCESS, LOGOUT_SUCCESS, ML_PREDICTION_SUCCESS } from './../actions/actions';

    const univList = [ 
        {
            id : 0,
            name : "UC Berkeley",
            similarRanking : {
                name : "University of Southern California",
                place : "Los Angeles, CA"
                },
            similarTuition : {
                name : "University of Dayton",
                place : "Dayton, OH",
                price : 44100
            }
        }, {
            id : 1,
            name : "UC Los Angeles",
            similarRanking : {
                name : "Washington University in St. Louis",
                place : "St. Louis, MO",
            },
            similarTuition : {
                name : "University of Tulsa",
                place : "Tulsa, OK",
                price : 42238
            }
        }, {
            id : 2,
            name : "UC San Diego",
            similarRanking : {
                name : "Boston College",
                place : "Chestnut Hill, MA"
            },
            similarTuition : {
                name : "University of La Verne",
                place : "La Verne, CA",
                price : 44500
            }
        },{
            id : 3,
            name : "UC Santa Barbara",
            similarRanking : {
                name : "University of Rochester",
                place : "Rochester, NY"
            },
            similarTuition : {
                name : "Marquette University",
                place : "Milwaukee, WI",
                price : 43936
            }
        },{
            id : 4,
            name  : "UC Davis",
            similarRanking : {
                name  : "Boston University",
                place : "Boston, MA"
            },
            similarTuition : {
                name : "Seton Hall University",
                place : "South Orange, NJ",
                price : 43780
            }
        },{
            id : 5,
            name  : "UC Irvine",
            similarRanking : {
                name  : "University of Florida",
                place : "Gainesville, FL"
            },
            similarTuition : {
                name : "University of Vermont",
                place : "Burlington, VT",
                price : 43690
            }
        },{ 
            id : 6,
            name  : "UC Santa Cruz",
            similarRanking : {
                name  : "North Carolina State University--Raleigh",
                place : "Raleigh, NC"
            },
            similarTuition : {
                name : "Sacred Heart University",
                place : "Fairfield, CT",
                price : 43070
            }
        },{
            id : 7,
            name  : "UC Riverside",
            similarRanking : {
                name  : "Stony Brook University--SUNY",
                place : "Stony Brook, NY"
            },
            similarTuition : {
                name : "Drake University",
                place : "Des Moines, IA",
                price : 42840
            }
        },{
            id : 8,
            name  : "UC Merced",
            similarRanking : {
                name  : "Temple University",
                place : "Philadelphia, PA"
            },
            similarTuition : {
                name : "University of St. Thomas",
                place : "St. Paul, MN",
                price : 42736
            }
        }
    ]

function app(state = { univList}, action) {
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
                dreamUniversities : action.payload.payload.dreamUniv
            })
        case ML_PREDICTION_SUCCESS :
            return Object.assign({},state,{
                results : action.payload
            })
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case SIGNUP_SUCCESS:
        case LOGOUT_SUCCESS:
            return Object.assign({}, { isLoggedIn: false, emailId: null, firstName: null })
        case UPDATE_PROFILE_DETAILS_SUCCESS:
            return Object.assign({},state,{
                profileDetails : action.payload.profileDetails
            })
        default:
            return state;

    }
}

export default combineReducers({ app});