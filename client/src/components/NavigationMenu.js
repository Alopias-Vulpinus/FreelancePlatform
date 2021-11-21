import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import image from './../static/img/freelance-logo.ico'
export const NavigationMenu = () => {

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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/open-tasks">Open Tasks</Nav.Link>
                <Nav.Link href="/performers">Performers</Nav.Link>
                <Nav.Link href="/customers">Customers</Nav.Link>
                {/*<Nav.Link href="/chats">Chats</Nav.Link> */}
            </Nav>
            <Nav>
                <Nav.Link href="/about-us"> About Developers </Nav.Link>
                <NavDropdown title="Дмитрий Белоцкий" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/working-tasks">Working Tasks</NavDropdown.Item>
                    <NavDropdown.Item href="/create-task">Create Task</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#logout-action">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        
        </Container>
      </Navbar>
    )
}