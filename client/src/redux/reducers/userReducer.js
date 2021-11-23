import { LOGIN_WITH_SOCIALS, SIGN_IN_ROLE_CHANGE, UPDATE_USER } from "../types"

export function userReducer( state = {}, action){
    switch(action.type){
        case LOGIN_WITH_SOCIALS:
            return {...state, value : 10}
        case SIGN_IN_ROLE_CHANGE:
            return {...state, signInRole : action.payload}
        case UPDATE_USER:
            return {...state, user: action.payload}
    }
    return {...state}
}