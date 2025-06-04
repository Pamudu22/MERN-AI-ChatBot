import { Box } from '@mui/material'
import React from 'react'

const Chat = () => {
  return (
   
   <Box sx={{
    display: 'flex', 
    flex:1,
    height: '100%' ,
    width:'100%',
    mt:3,
    gap:3
    }}>

      <Box sx={{display:{md:'flex', xs: 'none',sm:'none'}}}>

      </Box>
    
   </Box>
  )
}

export default Chat