import React from "react"
import { Col, Row } from "react-bootstrap"
import './../static/css/task.css'


export const Task = (props) => {
    
    const task = props.task || {
        title : 'task title',
        description : 'task description',
        price: 'task price',
        author: 'Dmitriy'
    }
    return (
        <div className='task-container black-bg'>
            <Row>
                <h1> {task.title} </h1>
            </Row>
            <Row>
                <p> {task.description} </p>
            </Row>
            <Row>
                <Col xs={9}>
                    <small className='task_author'> Written by {task.author}</small>
                </Col>
                <Col>
                    price: <span className='task_price'>  {task.price} </span>
                </Col>
            </Row>

           
            
           
        </div>
    )
}