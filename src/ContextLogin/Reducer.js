function reducer(state,action){
    switch(action.type){
        case 'LOADING' :
            return {...state,loading:true,error:false,isAuth:false}
        case 'ERROR' :
            return {...state,loading:false,error:true,isAuth:false}
        case 'SUCCESS' :
            return {...state,loading:false,error:false,isAuth:true}
        case 'ERRORHANDLING' :
            return {...state,loading:false,error:false,isAuth:false}
        default :
        return state
    }
}

export default reducer