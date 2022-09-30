import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  Container,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { LoginFailureAction, LoginLoading, LoginSuccess,ErrorHandling } from "../ContextLogin/action";
import { LoginContext } from "../ContextLogin/LoginContext";

function Login() {
  const {state,dispatch} = useContext(LoginContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleLogin = (login)=>{
    dispatch(LoginLoading)
    axios.post(`https://immense-wildwood-85705.herokuapp.com/user/Login`,{
      username :login.email,
      password:login.password,
    }).then((res)=>{console.log(res.data.token)
    dispatch(LoginSuccess)
    }).catch((err)=>{
      dispatch(LoginFailureAction)
      console.log('error')})
  }
  const handleError = () => {
    dispatch(ErrorHandling)
  }
  if(state.isAuth){
   return <Navigate to="/product"/>
  }
  return (
    <Box>
      {state.error ? <Alert status="error">
             <AlertIcon />
             There was an error processing your request
           <CloseButton
               alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
               onClick={handleError}
              />
           </Alert> :  <Navbar />}
     

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
        <Button colorScheme="red" isLoading={state.loading} onClick={()=>handleLogin(login)}>Login</Button>
      </Container>
    </Box>
  );
}

export default Login;
