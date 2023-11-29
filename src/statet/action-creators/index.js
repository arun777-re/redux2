export const buymilk = (quantity)=>{
    return (dispatch)=>{
      dispatch({
        type:"buy",
        payload:quantity
      }) 
    }
}
    
 export  const sellmilk = (quantity)=>{
    return (dispatch)=>{
        dispatch({
            type:"sell",
            payload:quantity
        })
    }
}

export const bringbag= (amount)=>{
      return (dispatch)=>{
        dispatch({
            type:"bring",
            payload:amount
        })
      }
}

