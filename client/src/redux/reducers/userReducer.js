import { SIGN_IN_ROLE_CHANGE, UPDATE_USER,
     REMOVE_USER, UPDATE_PERFORMERS, UPDATE_CUSTOMERS } from "../types"

const initialState = {
    currentUser : {},
    performers : [{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    },{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    },{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    }],
    customers : [{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    },{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    },{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    }],

}

export function userReducer( state = initialState, action){
    switch(action.type){
        case SIGN_IN_ROLE_CHANGE:
            return { ...state, signInRole : action.payload}
        case UPDATE_USER:
            return { ...state, user: action.payload }
        case REMOVE_USER:
            return {...state, user: null}
        case UPDATE_PERFORMERS:
            return {...state, performers : action.payload }
        case UPDATE_CUSTOMERS:
            return {...state, customers : action.payload }
        default:
            return {...state}
    }
}