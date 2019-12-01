export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

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

export function onSignUpSuccess(payload) {
    return {
        type: SIGNUP_SUCCESS,
        payload: payload
    }
}

export function onSignUpFailure() {
    return {
        type: SIGNUP_FAILURE,
        payload: null
    }
}
