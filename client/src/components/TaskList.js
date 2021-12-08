import React from "react"
import { Container } from "react-bootstrap"
import { Task } from "./Task"
import {NavLink} from "react-router-dom";

export const TaskList = ({tasks}) => {
    return (
        <Container className='task-list-container black-bg'>
            {tasks.map((task)  =>
                <Task task={task} key={task.id}/>
               )}
        </Container>
    )
}