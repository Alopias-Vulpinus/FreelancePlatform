import React, {useEffect} from 'react'
import {Col, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {useDispatch, useSelector} from "react-redux";
import {selectTask} from "../../redux/reducers/taskReducer";
import {mapResponseToTask, mapResponseToUserList} from "../../api/mapper";
import {updateCandidates, updateCurrentWorkingTask} from "../../redux/actions";
import {Candidates} from "../Candidates";
import {selectCandidates, selectUser} from "../../redux/reducers/userReducer";

export const TaskDetailPage = () => {
    const {request} = useHttp()
    const {id} = useParams()
    const task = useSelector(selectTask())
    const dispatch = useDispatch()
    const candidates = useSelector(selectCandidates())
    useEffect( () => {
        const call = async () => {
            //const taskResponse = await request('', 'GET', {id})
            const taskResponse = {}
            const taskResult = mapResponseToTask(taskResponse)
            const candidatesResult = mapResponseToUserList({})
            console.log('task', taskResult)
            dispatch(updateCurrentWorkingTask(taskResult))
            dispatch(updateCandidates(candidatesResult))
        }
        call()
    }, [])
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
                        <small className='task_author'> Written by {task.author}</small>
                    </Col>
                    <Col>
                        price: <span className='task_price'>  {task.price} </span>
                    </Col>
                </Row>
            </div>
            <Candidates candidates={candidates}/>
        </>
    )
}

