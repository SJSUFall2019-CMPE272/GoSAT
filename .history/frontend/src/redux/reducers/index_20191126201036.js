import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE} from './../actions/actions';

function app(state = {}, action) {
    switch(action.type){
        case LOGIN_SUCCESS :
            return Object.assign({}, state, {
                emailId: action.payload.payload.emailId,
                firstName: action.payload.payload.firstName,
                lastName: action.payload.payload.lastName,
                phone: action.payload.payload.phone,
                isLoggedIn: true,
                displayPic: action.payload.payload.displayPic
            })
        case LOGIN_FAILURE:
        case LOGOUT_SUCCESS:
        case SIGNUP_FAILURE:
            return Object.assign({}, { isLoggedIn: false, emailId: null, firstName: null })
        default:
            return state;

    }
}

export default combineReducers({ app});