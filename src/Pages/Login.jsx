import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleLogin = (login)=>{
    
    axios.post(`https://immense-wildwood-85705.herokuapp.com/user/Login`,{
      username :login.email,
      password:login.password,
    }).then((res)=>console.log(res.data)).catch((err)=>console.log('error'))
  }
  return (
    <Box>
      <Navbar />

      <Heading>Login and activate your account</Heading>
      <Container mt={10}>
        <Stack direction="column" gap="0.5rem">
          <Input
            type="email"
            value={login.email}
            name="email"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
          />
          <Text color="red">We will never share your email address</Text>
          <Input
            type="password"
            value={login.password}
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          <Spacer></Spacer>
        </Stack>
        <Button colorScheme="red" onClick={()=>handleLogin(login)}>Login</Button>
      </Container>
    </Box>
  );
}

export default Login;
