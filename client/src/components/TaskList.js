import React from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Task } from "./Task"

export const TaskList = (props) => {
    const tasks = props.tasks

    return (
        <Container className='task-list-container black-bg'>
            {tasks.map(task => <Task task={task}/>)}
        </Container>
    )
}