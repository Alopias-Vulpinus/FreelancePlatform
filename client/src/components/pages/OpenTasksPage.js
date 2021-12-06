import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { TaskListWithPagination } from '../TaskListWithPagination'
import { TaskSearch } from '../TaskSearch'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {selectOpenTasks} from "../../redux/reducers/taskReducer";
import {useHttp} from "../../hooks/http.hook";
import {mapResponseToTaskList} from "../../api/mapper";
import {updateOpenTasks} from "../../redux/actions";

const OpenTasksPage = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const openTasks = useSelector(selectOpenTasks())

    useEffect( () => {
        const call = async () => {
            //const tasksResponse = await request('', 'GET')
            const tasks = mapResponseToTaskList({})
            dispatch(updateOpenTasks(tasks))
        }
        call()
    }, [])
    return (
        <>
            <TaskSearch/>
            <TaskListWithPagination tasks={openTasks}/>
        </>
    )
}

export const OpenTasksPageWithAuthRedirect = WithAuthRedirect(OpenTasksPage)