import React, {useEffect} from 'react'
import {Button, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import defaultAvatar from "../../static/img/default-avatar.jpg";
import {RatingView} from "../RatingView";
import {Skills} from "../Skills";
import {useHttp} from "../../hooks/http.hook";
import {mapResponseToUser} from "../../api/mapper";
import {useDispatch, useSelector} from "react-redux";
import {selectUserToShow} from "../../redux/reducers/userReducer";
import {updateUserToShow} from "../../redux/actions";

export const ProfileViewPage = () => {
    const {request} =  useHttp()
    const user = useSelector(selectUserToShow())
    const dispatch = useDispatch()
    let {id} = useParams()
    useEffect( () => {
        const call = async () => {
            //const userResponse = await request('', 'GET', {id})
            const userResponse = {}
            const userResult = mapResponseToUser(userResponse)
            dispatch(updateUserToShow(userResult))
        }
        call()
    }, [])

    return (
        <>
            <div className='profile_block'>
                <div className='profile_img-border'>
                    <Image
                        className='profile_img'
                        roundedCircle
                        // src='https://lh3.googleusercontent.com/a-/AOh14GiF8JoxiZvihaFcJEt47SXUptzJEjC-DkmByy1w=s96-c'
                        src={user.imageUrl || defaultAvatar}
                        alt='avatar'/>
                </div>
                <Container>
                    <Row>
                        <InputGroup className="mb-3 mt-3">
                            <InputGroup.Text id="username">@</InputGroup.Text>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="username"
                                readOnly
                                value={user.username}
                            />
                        </InputGroup>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="firstName"></InputGroup.Text>
                                <FormControl
                                    placeholder="First Name"
                                    aria-describedby="firstName"
                                    value={user.firstName}/>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="lastName"></InputGroup.Text>
                                <FormControl
                                    placeholder="Last Name"
                                    aria-describedby="lastName"
                                    value={user.lastName}/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="Status">Status</InputGroup.Text>
                            <FormControl
                                placeholder="Status"
                                aria-label="Status"
                                aria-describedby="Status"
                                value={user.status}/>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="ContactMe"> Contact me</InputGroup.Text>
                            <FormControl
                                placeholder="ContactMe"
                                aria-label="ContactMe"
                                aria-describedby="ContactMe"
                                value={user.contactMe}/>
                        </InputGroup>
                    </Row>
                    <Row className='mb-3'>
                        <Skills skills={user.skills}/>
                    </Row>
                    <Row className='mb-3'>
                        <Col >
                            Rating:
                        </Col>
                        <Col>
                            <RatingView rating={user.rating}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

