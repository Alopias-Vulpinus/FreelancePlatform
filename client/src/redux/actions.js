import {
    SIGN_IN_ROLE_CHANGE, UPDATE_USER,
    REMOVE_USER, UPDATE_PERFORMERS, UPDATE_CUSTOMERS,
    UPDATE_NEW_TASKS, UPDATE_CURRENT_WORKING_TASK, UPDATE_WORKING_TASKS, UPDATE_AUTH
} from "./types"

// users 

export const changeSignInRole = (payload) => {return { type: SIGN_IN_ROLE_CHANGE, payload }}
export const updateUser = (payload) => { return { type: UPDATE_USER, payload }}
export const removeUser = () => {return {type: REMOVE_USER }}
export const updatePerformers = (payload) => { return {type: UPDATE_PERFORMERS, payload }}
export const updateCustomers = (payload) => { return {type: UPDATE_CUSTOMERS, payload }}

export const updateAuth = (payload) => {return { type: UPDATE_AUTH, payload }}
// tasks

export const updateNewTasks = (payload) => { return {type: UPDATE_NEW_TASKS, payload}} 
export const updateCurrentWorkingTask = (payload) => { return {type: UPDATE_CURRENT_WORKING_TASK, payload}} 
export const updateWorkingTasks = (payload) => { return {type: UPDATE_WORKING_TASKS, payload}} 