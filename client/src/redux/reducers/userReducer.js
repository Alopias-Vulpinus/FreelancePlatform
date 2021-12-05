import {
    SIGN_IN_ROLE_CHANGE, UPDATE_USER,
    REMOVE_USER, UPDATE_PERFORMERS, UPDATE_CUSTOMERS, UPDATE_AUTH
} from "../types"

const initialState = {
    currentUser : {},
    isAuth : false,
    userIdToShow : '',
    customers : [],
    performers : [],
    signInRole: 'customer'
}
export function userReducer( state = initialState, action){
    switch(action.type){
        case SIGN_IN_ROLE_CHANGE:
            return { ...state, signInRole : action.payload}
        case UPDATE_USER:
            return { ...state, currentUser : action.payload}
        case REMOVE_USER:
            return {...state, currentUser: {}}
        case UPDATE_PERFORMERS:
            return {...state, performers : action.payload }
        case UPDATE_CUSTOMERS:
            return {...state, customers : action.payload }
        case UPDATE_AUTH:
            return {...state, isAuth : action.payload }
        default:
            return {...state}
    }
}

export const selectAuth = () => (state) => state.user.isAuth
export const selectUser = () => (state) => state.user.currentUser
export const selectCustomers = () => (state) => state.user.customers
export const selectPerformers = () => (state) => state.user.performers
