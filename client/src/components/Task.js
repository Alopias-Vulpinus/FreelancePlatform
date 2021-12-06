import React, {useState} from "react"
import {Button, Col, Row} from "react-bootstrap"
import './../static/css/task.css'
import NavLink from "react-router-dom/es/NavLink";


export const Task = ({task}) => {
    const [accepted, setAccepted] = useState(false)

    const acceptTask = async () => {
        //accept logic
        const acceptedResult = true
        setAccepted(acceptedResult)
    }
    return (
        <div className='task-container black-bg'>
            <Row>
                <NavLink className="nav-link nav-content text-light" to={`/task/${task.id}`}>
                    <h1> {task.title} </h1>
                </NavLink>
            </Row>
            <Row>
                <Col xs={9}>
                    <p> {task.description} </p>
                </Col>
                {
                    !accepted &&
                    <Col>
                        <Button onClick={() => {acceptTask()}}> Accept </Button>
                    </Col>
                }

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