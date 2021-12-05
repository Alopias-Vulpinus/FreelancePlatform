import React from 'react'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";


const TaskDashboardPage = () => {
    return (
        <>
        Task Dashboard
        </>
    )
}

export const TaskDashboardPageWithAuthRedirect = WithAuthRedirect(TaskDashboardPage)