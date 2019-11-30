export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

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

