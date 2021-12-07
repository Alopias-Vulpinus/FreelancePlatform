import {combineReducers} from 'redux'
import { userReducer } from './userReducer'
import {taskReducer} from './taskReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    task: taskReducer
})