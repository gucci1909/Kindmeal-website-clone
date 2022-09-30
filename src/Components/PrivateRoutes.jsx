import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../ContextLogin/LoginContext'

function PrivateRoutes({children}) {
  const {state} = useContext(LoginContext)
if(!state.isAuth){  
  return (
  <Navigate to="/login"/>
  )
}
  return children
}

export default PrivateRoutes
