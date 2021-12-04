import React from "react"
import { useSelector } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import defaultAvatar from './../static/img/default-avatar.jpg'
import { RatingView } from "./RatingView"
import { Skills } from "./Skills"

export const Profile = (props) => {
    const profile = props.profile
    const user = useSelector(state => state.user.user)
    return (
    <>
        <Container className='profile-small_container black-bg text-light'>
            <Row>
                <Col xs={3}>
                    <img className='profile-small_image-short' src={defaultAvatar} alt='avatar'/>
                </Col>
                <Col xs={9}>
                    <Row> 
                        <Col xs={7}>
                            <div style={{fontSize : '1.2rem', marginBottom: '1em'}}> {profile.firstName + ' ' + profile.lastName} </div>
                        </Col>
                        <Col xs={5}>
                            <RatingView/>
                        </Col>
                    </Row>
                    <Row>
                        <Col> <Skills/> </Col>
                     </Row>
                </Col>
            </Row>
        </Container>
    </>)
}