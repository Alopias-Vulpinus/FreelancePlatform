import React, {useState} from 'react'
import './../static/css/profile.css'
import { Container, Image, Row, Col,InputGroup,FormControl } from 'react-bootstrap'
import { SelectRole } from '../components/SelectRole'
import { SelectSkill } from '../components/SelectSkill'
import { Button } from 'react-bootstrap';

const profile = {
    username : 'dimasiandro@gmail.com',
    firstName : 'Дмитрий',
    lastName: 'Белоцкий',
    status : 'I <3 code',
    skills : ['Python', 'Java', 'SQL'],
    role : 'Performer'
}
export const ProfilePage = () => {
    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [status, setStatus] = useState(profile.status)

    const handleLastNameChange = (event) =>{
        setLastName(event.target.value);
    } 
    const handlestatusChange = (event) =>{
        setFirstName(event.target.value);
    } 
    return (
        <>
            <div className='profile_block'>
                <div className='profile_img-border'>
                    <Image 
                        className='profile_img'
                        roundedCircle
                        src='https://lh3.googleusercontent.com/a-/AOh14GiF8JoxiZvihaFcJEt47SXUptzJEjC-DkmByy1w=s96-c' 
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
                                    value={profile.username}
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
                    <Row className='mb-3'>
                    <SelectRole role={profile.role}/>
                    </Row>
                    <Row className='mb-3'>
                        <SelectSkill skills={profile.skills}/>
                    </Row>
                    <Row className='mb-3'>
                        <Col xs={12} md={8}>
                        </Col>
                         <Col xs={6} md={4}>
                            <Button variant="primary" className='profile_submit-btn' > Change Profile </Button>
                        </Col>
                     </Row>
                </Container>
            </div>
        </>
    )
}
