import React from 'react'
import { Redirect } from 'react-router'

const StudentRoute = ({component: Component, role, isLoggedIn, ...other}) => (
    <Route {...other} render={props => {

        if (!isLoggedIn) {

            return <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
        }

        if (role !== 'STUDENT') {

            if (role === 'ADMIN') {


            }
            else if (role === 'TEACHER') {


            }
        }

        return <Component {...props}/>
    }}/>
)

export default StudentRoute
