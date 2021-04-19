import React from 'react'
import { Nav } from 'react-bootstrap'

const AdminNav = () => {
    return (
        <React.Fragment>
            <Nav.Link href="#home" className="nav-bar-link">Users</Nav.Link>
            <Nav.Link href="#features" className="nav-bar-link">Courses</Nav.Link>
            <Nav.Link href="#pricing" className="nav-bar-link">Sheets</Nav.Link>
        </React.Fragment>
    )
}

export default AdminNav
