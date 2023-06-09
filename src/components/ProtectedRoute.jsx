import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const ProtectedRoute = ({childred}) => {

    const {user} = UserAuth()

    if(!user){
        return <Navigate to='/'/>
    }
    else{
        return childred
    }

}

export default ProtectedRoute
