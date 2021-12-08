import React, {useState} from "react"
import {Button, Col, Row} from "react-bootstrap"
import './../static/css/task.css'
import NavLink from "react-router-dom/es/NavLink";
import {useHttp} from "../hooks/http.hook";
import {ASSIGN_TASK, TASK_CHOOSE_CANDIDATE} from "../api/endpoints";
import {useSelector} from "react-redux";
import {selectUser} from "../redux/reducers/userReducer";

const checkIfAccepted = (task, user) => {
    if(!task.candidates) return false
    return !!task.candidates.find((candidate) => {return candidate.id === user.id})
}

export const Task = ({task}) => {
    const {request} = useHttp()
    const user = useSelector(selectUser())
    const [accepted, setAccepted] = useState(checkIfAccepted(task, user))


    const acceptTask = async () => {
        //accept logic
        const result = await request(TASK_CHOOSE_CANDIDATE,'POST', {taskId : task.id , candidateId : user.id})
        console.log('task assigned', result)
        if(result){
            setAccepted(true)
        }
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
                    <small className='task_author'> Written by {task.customer.firstName + ' ' + task.customer.lastName}</small>
                </Col>
                <Col>
                    price: <span className='task_price'>  {task.price} </span>
                </Col>
            </Row>
        </div>
    )
}