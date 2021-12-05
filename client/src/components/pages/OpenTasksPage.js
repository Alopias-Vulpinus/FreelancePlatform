import React from 'react'
import { useSelector } from 'react-redux'
import { TaskListWithPagination } from '../TaskListWithPagination'
import { TaskSearch } from '../TaskSearch'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";

const OpenTasksPage = () => {
    const newTasks = useSelector(state => state.task.newTasks)

    return (
        <>
            <TaskSearch/>
            <TaskListWithPagination tasks={newTasks}/>
        </>
    )
}

export const OpenTasksPageWithAuthRedirect = WithAuthRedirect(OpenTasksPage)