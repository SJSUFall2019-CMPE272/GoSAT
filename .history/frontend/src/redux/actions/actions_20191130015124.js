export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const UPDATE_PROFILE_DETAILS_SUCCESS = "UPDATE_PROFILE_DETAILS_SUCCESS";
export const UPDATE_PROFILE_DETAILS_FAILURE = "UPDATE_PROFILE_DETAILS_FAILURE";

export function onLoginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

export function onLoginFailure() {
    return {
        type: LOGIN_FAILURE,
        payload: null
    }
}

export function onSignUpSuccess() {
    return {
        type: SIGNUP_SUCCESS,
        payload: null
    }
}

export function onSignUpFailure() {
    return {
        type: SIGNUP_FAILURE,
        payload: null
    }
}

export function onUpdateProfileDetailsFailure() {
    return {
        type: UPDATE_PROFILE_DETAILS_FAILURE,
        payload: null
    }
}

export function onUpdateProfileDetailsSuccess(payload) {
    return {
        type: UPDATE_PROFILE_DETAILS_SUCCESS,
        payload: payload
    }
}