import React from 'react'
import { createContext } from 'react'

export const AppContext = createContext();
function AppContextProvider({children}){

  return (
    <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
