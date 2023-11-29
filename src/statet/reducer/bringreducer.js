 const bringreducers = (state=0,action)=>{
    if(action.type==="bring"){
        return state + action.payload
    }else{
        return state
    }
}

export default bringreducers