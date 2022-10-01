import { Box, Button,} from '@chakra-ui/react';
import React from 'react'
function createArrayOfSize(n) {
    return new Array(n).fill(0);
  }

function Pagination({currentPage,handlePageChange}) {

    let pages =createArrayOfSize(5).map((a, i)=>(<Button colorScheme={"red"} ml="50px" mt='40px' disabled={currentPage===(i+1)} onClick={()=>handlePageChange(i+1)} >{i+1}</Button>  ));
    return <Box>{pages}</Box>;
}

export default Pagination