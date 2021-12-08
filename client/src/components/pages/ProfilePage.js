import React, {useState} from 'react'
import '../../static/css/profile.css'
import { Container, Image, Row, Col,InputGroup,FormControl } from 'react-bootstrap'
import { SelectSkill } from '../SelectSkill'
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import defaultAvatar from './../../static/img/default-avatar.jpg'
import {useHttp} from "../../hooks/http.hook";
import {mapResponseToUser} from "../../api/mapper";
import {updateUser} from "../../redux/actions";
import {GET_PROFILE} from "../../api/endpoints";

const ProfilePage = () => {
    const user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const {request} = useHttp()
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [status, setStatus] = useState(user.status)
    const [contactMe, setContactMe] = useState(user.contactMe)
    const [skills, setSkills] = useState(user.skills)

    const submitHandler = async (e) => {
        console.log(user.id, firstName, lastName, status, contactMe, skills)
        const userToUpdate = {id : user.id, firstName, lastName, status, contactMe, skills}
        const userResponse = await request(GET_PROFILE , 'POST', userToUpdate)
        const userResult = mapResponseToUser(userResponse)
        dispatch(updateUser(userResult))
        setFirstName(userResult.firstName)
        setLastName(userResult.lastName)
        setStatus(userResult.status)
        setContactMe(userResult.contactMe)
        setSkills(userResult.skills)
    }
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
                                    value={firstName}
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                    }}/>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="lastName"></InputGroup.Text>
                                <FormControl
                                    placeholder="Last Name"
                                    aria-describedby="lastName"
                                    value={lastName}
                                    onChange={(event) => {
                                        setLastName(event.target.value);
                                    }}/>
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
                                value={status}
                                onChange={(event) => {
                                    setStatus(event.target.value);
                                }}/>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="ContactMe"> Contact me</InputGroup.Text>
                            <FormControl
                                placeholder="ContactMe"
                                aria-label="ContactMe"
                                aria-describedby="ContactMe"
                                value={contactMe}
                                onChange={(event) => {
                                    setContactMe(event.target.value);
                                }}/>
                        </InputGroup>
                    </Row>
                    <Row className='mb-3'>
                        <SelectSkill skills={skills} setSkills={setSkills}/>
                    </Row>
                    <Row className='mb-3'>
                        <Col xs={12} md={8}>
                        </Col>
                         <Col xs={6} md={4}>
                            <Button variant="primary" className='profile_submit-btn' onClick={(e) => {submitHandler(e)}}> Change Profile </Button>
                        </Col>
                     </Row>
                </Container>
            </div>
        </>
    )
}

export const ProfilePageWithAuthRedirect = WithAuthRedirect(ProfilePage)