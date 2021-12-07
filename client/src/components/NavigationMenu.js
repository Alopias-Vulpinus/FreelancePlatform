import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import image from './../static/img/freelance-logo.ico'
import {useDispatch, useSelector} from "react-redux";
import {removeUser, updateAuth} from "../redux/actions";
import {useHistory} from "react-router-dom";
import {selectAuth, selectUser} from "../redux/reducers/userReducer";
import {NavLink} from "react-router-dom";
import {useRole} from "../hooks/role.hook";

export const NavigationMenu = () => {
    const user = useSelector(selectUser())
    const isAuthenticated = useSelector(selectAuth())
    const {isCustomer, isPerformer} = useRole()
    console.log('isCustomer, isPerformer', isCustomer, isPerformer)
    const dispatch = useDispatch()
    const history = useHistory()
    const logout = () => {
        localStorage.removeItem('user_id')
        dispatch(removeUser())
        dispatch(updateAuth(false))
        history.push('/login')
    }

    return (
        <Navbar bg="primary" variant="dark" expand="md">
        <Container>
        <Navbar.Brand href="/">
            <img src={image}
                width="50"
                height="50"
                style={{marginRight: '0.4em'}}
                alt='Logo'> 
            </img>
            Freelance Platform
        </Navbar.Brand>
            <>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/open-tasks">Open Tasks</NavLink>
                        <NavLink className="nav-link" to="/performers">Performers</NavLink>
                        <NavLink className="nav-link" to="/customers">Customers</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/about-us">About Developers</NavLink>
                        {isAuthenticated ?
                            <NavDropdown title={user.firstName + ' ' + user.lastName} id="basic-nav-dropdown">
                                <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                                <NavLink className="dropdown-item" to="/working-tasks">Working Tasks</NavLink>
                                {
                                    isCustomer &&  <NavLink className="dropdown-item" to="/create-task">Create Task</NavLink>
                                }
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" onClick={() => {logout()}}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            :
                            <Nav.Link href="/login"> Login </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </>
        </Container>
      </Navbar>
    )
}