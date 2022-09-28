import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar"

const images = ["https://www.kindmeal.my/photos/deal/7/703-4854-m.jpg", "https://www.kindmeal.my/photos/deal/5/529-2478-m.jpg", "https://www.kindmeal.my/photos/deal/7/701-4904-m.jpg","https://www.kindmeal.my/photos/deal/6/682-4370-m.jpg"];
function Home() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

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

  return (
    <>
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
    </>);
}

export default Home