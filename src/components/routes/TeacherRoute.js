import React from 'react'

const TeacherRoute = ({component: Component, role, isLoggedIn, ...other}) => (
    <Route {...other} render={props => {

        if (!isLoggedIn) {

            return <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
        }

        if (role !== 'TEACHER') {

            if (role === 'STUDENT') {


            }
            else if (role === 'ADMIN') {


            }
        }

        return <Component {...props}/>
    }}/>
)

export default TeacherRoute
