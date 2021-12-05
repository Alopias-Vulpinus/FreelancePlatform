import React from 'react'
import { TaskList } from '../TaskList'
import { TaskSearch } from '../TaskSearch'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";

const WorkingTasksPage = () => {
    return (
        <>
            <TaskSearch/>
            <TaskList/>
        </>
    )
}

export const WorkingTasksPageWithAuthRedirect = WithAuthRedirect(WorkingTasksPage)