import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'


function Protected() {
    const auth=useSelector(res=>res.authSlice)
    const {user}=auth;
  return (
    
    <div>{
        auth.user? <Outlet/> :<Navigate to='/login'/>
    }</div>
  )
}

export default Protected