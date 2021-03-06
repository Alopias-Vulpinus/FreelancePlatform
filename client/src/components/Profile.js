import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import defaultAvatar from './../static/img/default-avatar.jpg'
import { RatingView } from "./RatingView"
import { Skills } from "./Skills"

export const Profile = ({profile}) => {
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
                            <RatingView rating={profile.rating}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col> <Skills skills={profile.skills}/> </Col>
                     </Row>
                </Col>
            </Row>
        </Container>
    </>)
}