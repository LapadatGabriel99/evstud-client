import React from 'react'
import { Redirect, Route } from 'react-router'

const LoginRoute = ({component: Component, role, isLoggedIn, ...other}) => (
    <Route {...other} render={props => {
        
        if (isLoggedIn) {

            if (role === 'STUDENT') {

                return <Redirect to={{ pathname: '/user-hub', state: {from: props.location}}}/>
            }
            else if (role === 'TEACHER') {

                return <Redirect to={{ pathname: '/user-hub', state: {from: props.location}}}/>
            }
            else if (role === 'ADMIN') {

                return <Redirect to={{ pathname: '/user-hub', state: {from: props.location}}}/>
            }
        }

        return <Component {...props}/>
    }}/>
)

export default LoginRoute
