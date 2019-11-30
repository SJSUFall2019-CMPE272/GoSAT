const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

function onLoginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

function onLoginFailure() {
    return {
        type: LOGIN_FAILURE,
        payload: null
    }
}

export {
    LOGIN_FAILURE, LOGIN_SUCCESS,
    onLoginFailure, onLoginSuccess
}