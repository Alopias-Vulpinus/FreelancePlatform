import React from 'react'
import { useSelector } from 'react-redux'
import { TaskListWithPagination } from '../components/TaskListWithPagination'
import { TaskSearch } from '../components/TaskSearch'

export const OpenTasksPage = () => {
    const newTasks = useSelector(state => state.task.newTasks)

    return (
        <>
            <TaskSearch/>
            <TaskListWithPagination tasks={newTasks}/>
        </>
    )
}