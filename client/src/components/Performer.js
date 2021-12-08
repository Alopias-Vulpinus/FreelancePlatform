import React from "react"
import { Profile } from "./Profile"
import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

export const Performer = ({performer}) => {

    return (
        <>

            <div className='profile-list_container'>
                <h1 className='title'> Performer </h1>
                <Container className="candidates-container">
                    <Row>
                        <Col xs={9}>
                            <NavLink className="nav-link" to={`/profile/${performer.id}`}>
                                <Profile profile={performer} />
                            </NavLink>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>)
}