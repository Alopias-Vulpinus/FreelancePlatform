import React from "react"
import { Container } from "react-bootstrap"
import { Task } from "./Task"

export const TaskList = (props) => {
    const tasks = [
        {
            title : 'Task title',
            description : 'Task description Task description Task description Task description Task description Task description Task description Task description',
            price: '50$',
            author: 'Dmitriy'
        },
        {
            title : 'Task title',
            description : 'Task description',
            price: '50$',
            author: 'Dmitriy'
        }
    ]
    
    return (
        <Container className='task-list-container black-bg'>
            {tasks.map(task => <Task task={task}/>)}
        </Container>
    )
}