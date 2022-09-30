import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'
import reducer from './Reducer';
export const LoginContext = createContext();
function LoginContextProvider({children}){
  const InitState = {
    name : '',
    isAuth: false,
    loading : false,
    error: false
  }
  const [state,dispatch] = useReducer(reducer,InitState)

  return (
    <LoginContext.Provider value={{state,dispatch}}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
