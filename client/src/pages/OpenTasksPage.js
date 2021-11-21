import React from 'react'
import { TaskList } from '../components/TaskList'
import { TaskSearch } from '../components/TaskSearch'
import { Pagination } from '../components/Pagination'

export const OpenTasksPage = () => {
    return (
        <>
            <TaskSearch/>
            <TaskList/>
            <Pagination/>
        </>
    )
}