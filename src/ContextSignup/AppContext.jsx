import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'
import reducer from './Reducer';
export const AppContext = createContext();
function AppContextProvider({children}){
  const InitState = {
    loading : false,
    error : false
  }
  const [state,dispatch] = useReducer(reducer,InitState)

  return (
    <AppContext.Provider value={{state,dispatch}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
