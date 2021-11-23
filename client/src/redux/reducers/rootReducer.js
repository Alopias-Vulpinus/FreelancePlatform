import {combineReducers} from 'redux'
import { userReducer } from './userReducer'
import {taskReducer} from './taskReducer'
import {chatReducer} from './chatReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    task: taskReducer,
    chat: chatReducer
})