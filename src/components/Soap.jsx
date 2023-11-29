import React from 'react'
import {Box, Container,Typography} from "@mui/material"
import { useDispatch ,useSelector} from 'react-redux';
// import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import {actionCreators} from '../statet/index';
import { bindActionCreators } from 'redux';
// import { bindActionCreators } from 'redux';

 function Soap() {
    const amount = useSelector(state=>state.amount);
    const amount1 = useSelector(state=>state.quantity)
    const dispatch = useDispatch();
    const {buymilk,sellmilk,bringbag} = bindActionCreators(actionCreators,dispatch)
  return (

   <Container sx={{bgcolor:"tomato", height:"100vh",display:"flex"}}>
   <Box sx={{bgcolor:"white",height:"260px" , width:"230px", mt:"12px", mx:"7px"}}>
    <Typography>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJClYgO-qf-SjLGNdXb7VIA6qYSAW8GWcWMWfSjgI&s" alt=".." />
        <p>Buy Shoes</p>
        <h3>price only 300</h3>
        <button onClick={()=>{bringbag(1)}}>Buy</button>
    </Typography>
   </Box>
   <Box sx={{bgcolor:"white",height:"260px" , width:"230px", mt:"12px"}}>
    <Typography>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohm9_rjzh9WCYZu4gZJAMb7fOTuLkZVbekB7G7souFg&s" alt=".." />
        <p>Buy Bag</p>
        <h3>price only 100</h3>
        <button onClick={()=>{bringbag(1)}}>Buy</button>
    </Typography>
   </Box>
   <Box sx={{bgcolor:"whitegrey",height:"100px",width:"280px", mx:"229px", mt:"12px", alignItems:"flex-end"}}>
    <Typography><h5>Add money to your account atleast 100</h5></Typography>
    <button sx={{mx:"5px"}} onClick={()=>{sellmilk(100)}}>Add </button>
    <button sx={{mx:"5px"}} onClick={()=>{buymilk(100)}}>Deduct </button>
   </Box>
    
   </Container>
    


        

  )
}

export default Soap
