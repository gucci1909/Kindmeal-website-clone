import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../ContextSignup/AppContext'

function PrivateRoutes({children}) {
  const {state} = useContext(AppContext)
if(!state.isAuth){  
  return (

    <Navigate to="/login"/>
  )
}
  return children
}

export default PrivateRoutes
