import React from 'react'
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'
import '../../styles/AppBar.css'
import AdminNav from './AdminNav'
import NavBarAccount from './NavBarAccount'
import StudentNav from './StudentNav'
import TeacherNav from './TeacherNav'

const AppBar = (props) => {

    const { isLoggedIn, role } = props

    const displayLoginOrUserAccount = () => {

        if (isLoggedIn) {

            return (
                <NavBarAccount/>
            )
        }
        else {
            
            return (
                <Nav className="ml-auto">
                    <Nav.Link href="/login" className="nav-bar-link-login">Login</Nav.Link>
                </Nav>
            )
        }
    }

    const displayRoleBasedNavLinks = () => {

        if (isLoggedIn) {

            if (role === 'ADMIN') {

                return (
                    <AdminNav/>
                )
            }
            else if (role === 'TEACHER') {
    
                return (
                    <TeacherNav/>
                )
            }
            else if (role === 'TEACHER') {
    
                return (
                    <StudentNav/>
                )
            }
        }
        else {

            return (
                <React.Fragment>
                    <Nav.Link href="/" className="nav-bar-link">Home</Nav.Link>
                    <Nav.Link href="/contacts" className="nav-bar-link">Contacts</Nav.Link>
                </React.Fragment>
            )
        }
    }

    return (
        <Navbar className="nav-bar" variant="dark">
            <Navbar.Brand href="/" className="nav-bar-brand">EvStud</Navbar.Brand>
            <Nav className="mr-auto">
                {displayRoleBasedNavLinks()}
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            {displayLoginOrUserAccount()}
        </Navbar>
    )
}

export default AppBar
