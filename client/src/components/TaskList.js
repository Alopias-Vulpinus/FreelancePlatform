import React from "react"
import { Container } from "react-bootstrap"
import { Task } from "./Task"

export const TaskList = ({tasks}) => {
    return (
        <Container className='task-list-container black-bg'>
            {tasks.map(task => <Task task={task}/>)}
        </Container>
    )
}