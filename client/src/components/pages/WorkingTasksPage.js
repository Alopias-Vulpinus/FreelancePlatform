import React, {useEffect} from 'react'
import { TaskSearch } from '../TaskSearch'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {useHttp} from "../../hooks/http.hook";
import {useDispatch, useSelector} from "react-redux";
import {selectWorkingTasks} from "../../redux/reducers/taskReducer";
import {mapResponseToTaskList} from "../../api/mapper";
import {updateWorkingTasks} from "../../redux/actions";
import {TaskListWithPagination} from "../TaskListWithPagination";
import {
    GET_TASKS_OF_CUSTOMER_NEW,
    GET_TASKS_OF_CUSTOMER_WORKING,
    GET_TASKS_OF_PERFORMER
} from "../../api/endpoints";
import {selectUser} from "../../redux/reducers/userReducer";

const WorkingTasksPage = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const workingTasks = useSelector(selectWorkingTasks())
    const user = useSelector(selectUser())
    useEffect( () => {
        const call = async () => {
            let tasks
            if(user.role === 'customer'){
                let workingTasksResponse = await request(GET_TASKS_OF_CUSTOMER_WORKING + `&id=${user.id}`, 'GET')
                let newTasksResponse = await request(GET_TASKS_OF_CUSTOMER_NEW + `&id=${user.id}`, 'GET')
                workingTasksResponse = mapResponseToTaskList(workingTasksResponse)
                newTasksResponse = mapResponseToTaskList(newTasksResponse)
                tasks = newTasksResponse.concat(workingTasksResponse)
            } else if(user.role === 'performer'){
                const workingTasksResponse = await request(GET_TASKS_OF_PERFORMER + `&id=${user.id}`, 'GET')
                tasks = mapResponseToTaskList(workingTasksResponse)
            }
            dispatch(updateWorkingTasks(tasks))
        }
        call()
    }, [])

    return (
        <>
            <TaskSearch/>
            <TaskListWithPagination tasks={workingTasks || []}/>
        </>
    )
}

export const WorkingTasksPageWithAuthRedirect = WithAuthRedirect(WorkingTasksPage)