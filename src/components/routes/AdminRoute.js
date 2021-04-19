import React from 'react'
import { Redirect, Route } from 'react-router'

const AdminRoute = ({component: Component, role, isLoggedIn, ...other}) => (
    <Route {...other} render={props => {

        if (!isLoggedIn) {

            return <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
        }

        if (role !== 'ADMIN') {

            if (role === 'STUDENT') {


            }
            else if (role === 'TEACHER') {


            }
        }

        return <Component {...props}/>
    }}/>    
)

export default AdminRoute
