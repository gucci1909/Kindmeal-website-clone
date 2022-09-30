import React from 'react'
import LoginContextProvider from './ContextLogin/LoginContext'
import AppContextProvider from './ContextSignup/AppContext'

function ContextProvider({children}) {
  return (
    <AppContextProvider>
      <LoginContextProvider>
        {children}
      </LoginContextProvider>
    </AppContextProvider>
  )
}
export default ContextProvider
