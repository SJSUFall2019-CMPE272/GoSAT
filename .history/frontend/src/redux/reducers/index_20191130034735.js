import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS,
    UPDATE_PROFILE_DETAILS_FAILURE, UPDATE_PROFILE_DETAILS_SUCCESS, LOGOUT_SUCCESS } from './../actions/actions';

function app(state = {}, action) {
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
                dreamUniversities : action.payload.payload.dreamUniv,
                univList : {
                    0 : {
                        name : "UC Berkeley",
                        similarRanking : {
                            name : "University of Southern California",
                            place : "Los Angeles, CA"
                            },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    },
                    1 : {
                        name : "UC Los Angeles",
                        similarRanking : {
                            name : "Washington University in St. Louis",
                            place : "St. Louis, MO"
                        },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    },
                    2 : {
                        name : "UC San Diego",
                        similarRanking : {
                            name : "Boston College",
                            place : "Chestnut Hill, MA"
                        },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    },
                    3 : {
                        name : "UC Santa Barbara",
                        similarRanking : {
                            name : "University of Rochester",
                            place : "Rochester, NY"
                        },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    },
                    4 : {
                        name  : "UC Davis",
                        similarRanking : {
                            name  : "Boston University",
                            place : "Boston, MA"
                        },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    },
                    5 : {
                        name  : "UC Irvine",
                        similarRanking : {
                            name  : "University of Florida",
                            place : "Gainesville, FL"
                        },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    },
                    6 : { 
                        name  : "UC Santa Cruz",
                        similarRanking : {
                            name  : "North Carolina State University--Raleigh",
                            place : "Raleigh, NC"
                        },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    },
                    7 : {
                        name  : "UC Riverside",
                        similarRanking : {
                            name  : "Stony Brook University--SUNY",
                            place : "Stony Brook, NY"
                        },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    },
                    8 : {
                        name  : "UC Merced",
                        similarRanking : {
                            name  : "Temple University",
                            place : "Philadelphia, PA"
                        },
                        similarTuition : {
                            name : "",
                            place : ""
                        }
                    }

                }
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