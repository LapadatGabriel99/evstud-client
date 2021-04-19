import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import '../../styles/AppBar.css'

const NavBarAccount = () => {
    return (
        <Nav className="ml-auto">
            <NavDropdown title="Account" id="basic-nav-dropdown" className="nav-bar-account">
                <NavDropdown.Item href='/user-profile'>
                    Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default NavBarAccount
