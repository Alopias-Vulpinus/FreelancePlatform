import React, {useEffect} from 'react'
import {Button, Col, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {useDispatch, useSelector} from "react-redux";
import {selectTask} from "../../redux/reducers/taskReducer";
import {mapResponseToCandidates, mapResponseToTask, mapResponseToUserList} from "../../api/mapper";
import {updateCandidates, updateCurrentWorkingTask} from "../../redux/actions";
import {Candidates} from "../Candidates";
import {selectCandidates, selectUser} from "../../redux/reducers/userReducer";
import {CHANGE_TASK_STATUS, GET_TASK} from "../../api/endpoints";
import {Performer} from "../Performer";
import {Rating} from "../Rating";

export const TaskDetailPage = () => {
    const {request} = useHttp()
    const {id} = useParams()
    const task = useSelector(selectTask())
    const dispatch = useDispatch()
    const candidates = useSelector(selectCandidates())
    useEffect( () => {
        const call = async () => {
            const taskResponse = await request(GET_TASK + `/${id}`, 'GET')
            const taskResult = mapResponseToTask(taskResponse)
            console.log('task: ', taskResult)
            const candidatesResult = mapResponseToCandidates(taskResponse.candidates)
            dispatch(updateCurrentWorkingTask(taskResult))
            dispatch(updateCandidates(candidatesResult))
        }
        call()
    }, [])

    const closeTask = async () => {
        const closedTaskResponse = await request(CHANGE_TASK_STATUS, 'POST', {taskId: id, status : 'CLOSED'})
        console.log('closedTaskResponse', closedTaskResponse)
        const closedTask = mapResponseToTask(closedTaskResponse)
        console.log('closedTask', closedTask)
        dispatch(updateCurrentWorkingTask(closedTask))
    }

    return (
        <>
            <div className='task-container black-bg'>
                <Row>
                    <h1> {task.title} </h1>
                </Row>
                <Row>
                    <p> {task.description} </p>
                </Row>
                <Row>
                    <Col xs={9}>
                        <small className='task_author'> Written by { (task.customer && task.customer.firstName) + ' ' + (task.customer && task.customer.lastName)}</small>
                    </Col>
                    <Col>
                        price: <span className='task_price'>  {task.price} </span>
                    </Col>
                </Row>
                <Row>
                    { candidates.length !== 0 && <Candidates candidates={candidates}/>}
                    { task.performer && <Performer performer = {task.performer}/>}
                    {task.status === 'WORKING' &&  <Button className="btn-primary" style={{width: '10em', marginLeft: 'auto', marginRight: 'auto'}}
                                                           onClick={() => {closeTask()}}> Close Task</Button>}
                    {task.status === 'CLOSED' &&  <Rating/>}

                </Row>
            </div>
        </>
    )
}

