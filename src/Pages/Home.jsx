import { Box,Icon,Image, Spacer, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import data from "../data.json"

const images = ["https://www.kindmeal.my/photos/deal/7/703-4854-m.jpg", "https://www.kindmeal.my/photos/deal/5/529-2478-m.jpg", "https://www.kindmeal.my/photos/deal/7/701-4904-m.jpg","https://www.kindmeal.my/photos/deal/6/682-4370-m.jpg"];
function Home() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  // const breakPoints = useBreakpoint({
  //   base: "base",
  //   sm : "small",
  //   md :"medium",
  //   lg:"large",
  //   xl : "xl",
  //   "2xl" : '2xl'
  // })

  const resetTimeout=()=> {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout(); 
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1),2500);
    return () => {
      resetTimeout();
    };
  },[index]);

  return (<Box>
    <Navbar/>
    <Box style={{display:"flex" ,alignItems:"centre"}}>
      <Box  display='flex'  alignItems='centre' justifyContent="centre" ml="220px" className="slideshow">
      <Box className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((el, index) => (
          <Image
            className="slide"
            src={el}
            key={index}
          ></Image>))}
      </Box>
    </Box>
    <Box>
      <Image h="400px" w="450px" src="https://www.kindmeal.my/photos/shop/5/596-4521-m.jpg"></Image>
    </Box>
    </Box>
    <Box>
      <Text fontSize='3xl'>Latest News & Videos</Text>
      <Box ml={{ md: '270px', lg: '200px',xl:'30px' }} mr={{ md: 'auto', lg: '0px',xl:"40px" }} textAlign='centre' display='Flex' gap='1rem'>
        {data.Dicover_restaurants && data.Dicover_restaurants.map((el)=>(
        <Box key={el.id}>
           <Image cursor={'pointer'} src={el.img} h='300px' w='400px' alt={el.id}></Image>
           <Text fontSize='xl'>{el.title}</Text>
        </Box>
        ))}
      </Box>
    </Box>
    <Spacer></Spacer>
    <Tooltip hasArrow label="Search for food" placement="top">
  <Icon name="search" />
</Tooltip>
    <Box mt='100px'>
      <Text fontSize='3xl'>Yummylicious Moments</Text>
      <Box  ml={{ md: '270px', lg: '200px',xl:'30px' }} mr={{ md: 'auto', lg: '0px',xl:"40px" }} textAlign='centre' display='Flex' gap='1rem'>
        {data.Yummylicious && data.Yummylicious.map((el)=>(
        <Box key={el.id}>
           <Image cursor={'pointer'} src={el.img} h='300px' w='400px' alt={el.id}></Image>
           <Text fontSize='xl'>{el.title}</Text>
        </Box>
        ))}
      </Box>
    </Box>

    <Box mt='60px'>
      <Text fontSize='3xl'>Discover Restaurants</Text>
      <Box ml={{ md: '270px', lg: '200px',xl:'30px' }} mr={{ md: 'auto', lg: '0px',xl:"40px" }} textAlign='centre' display='Flex' gap='1rem'>
        {data.Dicover_restaurants && data.Dicover_restaurants.map((el)=>(
        <Box key={el.id}>
           <Image cursor={'pointer'} src={el.img} h='300px' w='400px' alt={el.id}></Image>
           <Text fontSize='xl'>{el.title}</Text>
        </Box>
        ))}
      </Box>
    </Box>

    <Box mt='60px'>
      <Text fontSize='3xl'>Amazing Superheroes</Text>
      <Box  ml={{ md: '270px', lg: '200px',xl:'30px' }} mr={{ md: 'auto', lg: '0px',xl:"40px" }} textAlign='centre' display='Flex' gap='1rem'>
        {data.Amazing_superheroes && data.Amazing_superheroes.map((el)=>(
        <Box key={el.id}>
           <Image cursor={'pointer'} src={el.img} h='300px' w='400px' alt={el.id}></Image>
           <Text fontSize='xl'>{el.title}</Text>
        </Box>
        ))}
      </Box>
    </Box>
    <Footer/>
     </Box>)
}

export default Home