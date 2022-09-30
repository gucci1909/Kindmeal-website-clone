import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from '../Components/PrivateRoutes'
import Home from './Home'
import Login from './Login'
import Product from './Product'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={
       <PrivateRoutes>
         <Product/>

       </PrivateRoutes> 
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default AllRoutes