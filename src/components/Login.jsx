import React from 'react'
import { useLocation } from 'react-router-dom'

function Login() {

const location = useLocation()

  return (
    <div className='text-center'>
   <p>  user {location.state.name} registered..Please login</p>
    </div>
  )
}

export default Login
