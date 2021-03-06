import {
    SIGN_IN_ROLE_CHANGE,
    UPDATE_USER,
    REMOVE_USER,
    UPDATE_PERFORMERS,
    UPDATE_CUSTOMERS,
    UPDATE_NEW_TASKS,
    UPDATE_CURRENT_WORKING_TASK,
    UPDATE_WORKING_TASKS,
    UPDATE_AUTH,
    UPDATE_USER_TO_SHOW,
    UPDATE_CANDIDATES
} from "./types"
import {mapResponseToUser} from "../api/mapper";

// users 

export const changeSignInRole = (payload) => {return { type: SIGN_IN_ROLE_CHANGE, payload }}
export const updateUser = (payload) => { return { type: UPDATE_USER, payload }}
export const removeUser = () => {return {type: REMOVE_USER }}
export const updatePerformers = (payload) => { return {type: UPDATE_PERFORMERS, payload }}
export const updateCustomers = (payload) => { return {type: UPDATE_CUSTOMERS, payload }}
export const updateAuth = (payload) => {return { type: UPDATE_AUTH, payload }}
export const updateUserToShow = (payload) => {return { type: UPDATE_USER_TO_SHOW, payload }}
export const updateCandidates = (payload) => {return { type: UPDATE_CANDIDATES, payload }}

// tasks

export const updateOpenTasks = (payload) => { return {type: UPDATE_NEW_TASKS, payload}}
export const updateCurrentWorkingTask = (payload) => { return {type: UPDATE_CURRENT_WORKING_TASK, payload}} 
export const updateWorkingTasks = (payload) => { return {type: UPDATE_WORKING_TASKS, payload}}


export const getUserFromServerAction = (request, user_id) => async (dispatch) => {
    console.log('getUserFromServerAction')
    const userResponse = await request('profile/', 'GET', {id: user_id})
    //console.log('useAuth userResponse',userResponse)
    const user = mapResponseToUser(userResponse);
    console.log('user', user)
    dispatch(updateUser(user))
    dispatch(updateAuth(true))
}