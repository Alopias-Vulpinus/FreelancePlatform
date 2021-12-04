import React from 'react'
import { TaskList } from '../components/TaskList'
import { TaskSearch } from '../components/TaskSearch'

export const WorkingTasksPage = () => {
    return (
        <>
            <TaskSearch/>
            <TaskList/>
        </>
    )
}