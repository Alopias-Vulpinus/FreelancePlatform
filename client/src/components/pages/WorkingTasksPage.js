import React, {useEffect} from 'react'
import { TaskSearch } from '../TaskSearch'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {useHttp} from "../../hooks/http.hook";
import {useDispatch, useSelector} from "react-redux";
import {selectWorkingTasks} from "../../redux/reducers/taskReducer";
import {mapResponseToTaskList} from "../../api/mapper";
import {updateWorkingTasks} from "../../redux/actions";
import {TaskListWithPagination} from "../TaskListWithPagination";

const WorkingTasksPage = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const workingTasks = useSelector(selectWorkingTasks())

    useEffect( () => {
        const call = async () => {
            //const tasksResponse = await request('', 'GET')
            const tasks = mapResponseToTaskList({})
            dispatch(updateWorkingTasks(tasks))
        }
        call()
    }, [])

    return (
        <>
            <TaskSearch/>
            <TaskListWithPagination tasks={workingTasks}/>
        </>
    )
}

export const WorkingTasksPageWithAuthRedirect = WithAuthRedirect(WorkingTasksPage)