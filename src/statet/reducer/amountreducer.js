const amountReducers = (state=0,action)=>{
    if(action.type==="sell"){
        return state + action.payload
    }else if(action.type==="buy"){
        return state - action.payload
    
    }else if(action.type==="bring"){
       return ( state - (action.payload)*40)
    }else{
           return state
    }
}


export default amountReducers;