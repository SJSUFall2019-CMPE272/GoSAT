export function onLoginSuccess(payload) {
    return {
        type: BUYER_LOGIN_SUCCESS,
        payload: payload
    }
}

export function onLoginFailure() {
    return {
        type: LOGIN_FAILURE,
        payload: null
    }
}
