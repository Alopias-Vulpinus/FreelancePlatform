import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { TaskListWithPagination } from '../TaskListWithPagination'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {selectOpenTasks} from "../../redux/reducers/taskReducer";
import {useHttp} from "../../hooks/http.hook";
import {mapResponseToTaskList} from "../../api/mapper";
import {updateOpenTasks} from "../../redux/actions";
import {GET_ALL_NEW_TASKS} from "../../api/endpoints";

const OpenTasksPage = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const openTasks = useSelector(selectOpenTasks())

    useEffect( () => {
        const call = async () => {
            const tasksResponse = await request(GET_ALL_NEW_TASKS, 'GET')
            const tasks = mapResponseToTaskList(tasksResponse)
            dispatch(updateOpenTasks(tasks))
        }
        call()
    }, [])
    return (
        <>
            {/*<TaskSearch/>*/}
            <TaskListWithPagination tasks={openTasks}/>
        </>
    )
}

export const OpenTasksPageWithAuthRedirect = WithAuthRedirect(OpenTasksPage)