import React from "react"
import {CreateTaskForm} from '../CreateTaskForm'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
const CreateTaskPage = () => {
    
    return (
        <div className='create-task-form_container black-bg'>
            <CreateTaskForm/>
        </div>
    )
}

export const CreateTaskPageWithAuthRedirect = WithAuthRedirect(CreateTaskPage)