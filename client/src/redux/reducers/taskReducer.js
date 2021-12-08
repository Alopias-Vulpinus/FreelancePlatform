import { UPDATE_NEW_TASKS, UPDATE_CURRENT_WORKING_TASK, UPDATE_WORKING_TASKS} from "../types"

// const initialState = {
//     currentWorkingTask : {},
//     newTasks : [
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         }
//     ],
//     workingTasks: [
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         },
//         {
//             id: '',
//             title : 'Task title',
//             description : 'Task description',
//             price: '50$',
//             author: 'Dmitriy'
//         }
//     ]
//}


const initialState = {
    currentWorkingTask: {},
    newTasks: [],
    workingTasks: []
}
export function taskReducer( state = initialState, action){
    switch(action.type){
        case UPDATE_NEW_TASKS:
            return { ...state, newTasks : action.payload}
        case UPDATE_CURRENT_WORKING_TASK:
            return { ...state, currentWorkingTask: action.payload }
        case UPDATE_WORKING_TASKS:
            return {...state, workingTasks: action.payload}
        default:
            return {...state}
    }
}

export const selectTask = () => (state) => state.task.currentWorkingTask
export const selectOpenTasks = () => (state) => state.task.newTasks
export const selectWorkingTasks = () => (state) => state.task.workingTasks