import { LOGIN_WITH_SOCIALS, SIGN_IN_ROLE_CHANGE, UPDATE_USER } from "../types"

export const loginWithSocials = () => {
    return {
        type: LOGIN_WITH_SOCIALS,
        payload: {}
    }
}

export const changeSignInRole = (payload) => {
    return {
        type: SIGN_IN_ROLE_CHANGE,
        payload: payload
    }
}

export const updateUser = (payload) => {
    return {
        type: UPDATE_USER,
        payload: payload
    }
}