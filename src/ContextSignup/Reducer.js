// import React from 'react'

function reducer(state,action){
  switch(action.type){
    case 'LOADING' :
        return {...state,loading:true,error:false}
    case 'SUCCESS' :
        return {...state,loading:false,error:false}
    case 'ERROR' : 
       return {...state,loading:false,error:true}
    default :
       return state
  }
}

export default reducer
