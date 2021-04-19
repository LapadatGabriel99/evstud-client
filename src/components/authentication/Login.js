import React from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import '../../styles/Login.css'
import '../../App.css'

const Login = (props) => {
    return (
        <Form className="login-form">
            <div className="center-oriented-content">
                <h1>
                    <span className="font-weight-bold">evStud</span>.com
                </h1>
                <h2 className="text-center">Welcome</h2>
            </div>
            <FormGroup>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter email'/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password'/>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block"
                    type="submit"> 
                Sign in
            </Button>
            <div className="center-oriented-content login-end-links">
                <a href="/">Home</a>
                <span className="p-2">|</span>
                <a href="#">Forgot password</a>
            </div>
        </Form>
    )
}

export default Login
