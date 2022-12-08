import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar';

function SingleUser() {
  const [data,setData] = useState({});
  const { id } = useParams();
  const fetching = async(id)=>{
    const res = await fetch(`https://umang-food-api.onrender.com/api/Food/${id}`);
    const data = await res.json();
    setData(data);
    
  }
  useEffect(()=>{
    fetching(id)

  },[id])
  const navigate = useNavigate();
  const handleBack = ()=>{
    navigate('/product')
  }
  return (
    <Box>
        <Navbar/>
      <Container>
        {<Box key={data.id}> 
            <Image src={data.img}  w="full" h="sm"  alt={data.id} mt={"20px"} />
            <Heading mt={"20px"}>{data.title}</Heading>
            <Text mt={"20px"}>In biochemistry, fat is a generic term for a class of lipids. Fats are produced by organic processes in animals and plants. All fats are insoluble in water and have a density significantly below that of water (i.e. they float on water.) Fats that are liquid at room temperature are often referred to as oil. Most fats are composed primarily of triglycerides; some monoglycerides and diglycerides are mixed in, produced by incomplete esterification. These are extracted and used as an ingredient.Products with a lot of saturated fats tend to be solid at room temperature, while products containing unsaturated fats, which include monounsaturated fats and polyunsaturated fats, tend to be liquid at room temperature. Predominantly saturated fats (solid at room temperature) include all animal fats (e.g. milk fat, lard, tallow), as well as palm oil, coconut oil, cocoa fat and hydrogenated vegetable oil (shortening). All other vegetable fats, such as those coming from olive, peanut, maize (corn oil), cottonseed, sunflower, safflower, and soybean, are predominantly unsaturated and remain liquid at room temperature.</Text>
            <Button onClick={handleBack} colorScheme="red" >Go Back</Button>
            
        </Box>}
          
      </Container>
    </Box>
  )
}

export default SingleUser
