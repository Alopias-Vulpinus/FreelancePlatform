import React from "react"
import { Profile } from "./Profile"
import {NavLink} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../redux/reducers/userReducer";
import {useHttp} from "../hooks/http.hook";
import {ASSIGN_TASK} from "../api/endpoints";
import {selectTask} from "../redux/reducers/taskReducer";
import {mapResponseToTask} from "../api/mapper";
import {updateCurrentWorkingTask} from "../redux/actions";

export const Candidates = ({candidates}) => {
    const {request} = useHttp()
    const user = useSelector(selectUser())
    const task = useSelector(selectTask())
    const dispatch = useDispatch()
    const choosePerformer = async (candidateId) => {
        const response = await request(ASSIGN_TASK,'POST', { taskId : task.id, performerId: candidateId})
        console.log('ASSIGN_TASK response', response)
        const taskResponse = mapResponseToTask(response)
        console.log('mapped Task', taskResponse)
        dispatch(updateCurrentWorkingTask(taskResponse))
    }

    return (
        <>

            <div className='profile-list_container'>
                <h1 className='title'> Candidates </h1>
                    <Container className="candidates-container">
                        {
                            candidates.map((candidate) =>
                            <Row key={candidate.id}>
                                <Col xs={9}>
                                    <NavLink className="nav-link" to={`/profile/${candidate.id}`}>
                                        <Profile profile={candidate} />
                                    </NavLink>
                                </Col>
                                <Col>
                                    <Button className='choose-performer-btn' onClick={() => {choosePerformer(candidate.id)}}> Choose </Button>
                                </Col>
                            </Row>
                            )
                        }

                    </Container>
            </div>
        </>)
}