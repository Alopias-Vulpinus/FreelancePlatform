import React from "react"
import { Profile } from "./Profile"
import {NavLink} from "react-router-dom";
import {ChoosePerformer} from "./ChoosePerformer";
import {Col, Container, Row} from "react-bootstrap";

export const Candidates = ({candidates}) => {
    return (
        <>

            <div className='profile-list_container'>
                <h1 className='title'> Candidates </h1>
                    <Container className="candidates-container">
                        {
                            candidates.map((candidate, i) =>
                            <Row>
                                <Col xs={9}>
                                    <NavLink className="nav-link" to={`/profile/${candidate.id}`}>
                                        <Profile profile={candidate} key={i} />
                                    </NavLink>
                                </Col>
                                <Col>
                                    <ChoosePerformer/>
                                </Col>
                            </Row>
                            )
                        }

                    </Container>
            </div>
        </>)
}