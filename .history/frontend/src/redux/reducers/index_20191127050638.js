import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS,
    UPDATE_PROFILE_DETAILS_FAILURE, UPDATE_PROFILE_DETAILS_SUCCESS } from './../actions/actions';

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
                dreamUniversities : action.payload.payload.dreamUniv
            })
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case SIGNUP_SUCCESS:
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