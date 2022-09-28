import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const bg = "#68D391"
 return (
  <>
  
  <Box>
  <Image src='https://www.kindmeal.my/images/logo-kindmeal.png' alt='kindmeal logo' />
</Box>
 <Box  color='white' gap="35px" display='flex'  alignItems='centre' justifyContent="centre" fontSize="22px" height="auto" bg={bg}>
 <NavLink to='/'  style={({ isActive }) => ({ backgroundColor: isActive ? '#2F855A' : '#68D391' , color:"white",marginLeft:"220px" , padding:"10px"  })} end>Home</NavLink>
 <NavLink to='/' style={({ isActive }) => ({ backgroundColor: isActive ? '#2F855A' : '#68D391' , color:"white" , padding:"10px"})} end>Meal Deals</NavLink>
 <NavLink to='/product' style={({ isActive }) => ({ backgroundColor: isActive ? '#2F855A' : '#68D391' , color:"white", padding:"10px"})} >KindMoments</NavLink>
 <NavLink to='/' style={({ isActive }) => ({ backgroundColor: isActive ? '#2F855A' : '#68D391' , color:"white" , padding:"10px" })} end>Hot Picks</NavLink>
 <NavLink to='/' style={({ isActive }) => ({ backgroundColor: isActive ? '#2F855A' : '#68D391' , color:"white" , padding:"10px"})} end>Recipes</NavLink>
 <NavLink to='/' style={({ isActive }) => ({ backgroundColor: isActive ? '#2F855A' : '#68D391' , color:"white" , padding:"10px" })} end>Directory</NavLink>
 <NavLink to='/' style={({ isActive }) => ({ backgroundColor: isActive ? '#2F855A' : '#68D391' , color:"white" , padding:"10px" })} end>Articles</NavLink>
 <NavLink to='/' style={({ isActive }) => ({ backgroundColor: isActive ? '#2F855A' : '#68D391' , color:"white" , padding:"10px" })} end>Help</NavLink>
 </Box>
  </>)
}

export default Navbar
