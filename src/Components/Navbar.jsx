import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../ContextSignup/AppContext";
import {
  SignupFailureAction,
  SignupLoading,
  SignupSuccess,
} from "../ContextSignup/action";

function Navbar() {
  const bg = "#68D391";
  const InitState = {
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const { state, dispatch } = useContext(AppContext);
  const [signup, setSignup] = useState(InitState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const handleSignup = (signup) => {
    dispatch(SignupLoading);
    axios
      .post(`https://immense-wildwood-85705.herokuapp.com/user/Signup`, {
        username: signup.username,
        password: signup.password,
        email: signup.email,
        phone: signup.phone,
        userType: "admin",
      })
      .then((res) => {
        console.log(res.data);
        dispatch(SignupSuccess);
        setSuccess(true);
      })
      .catch((err) => {
        dispatch(SignupFailureAction);
      });
  };
  const handleSuccess = () => {
    setSuccess(false);
  };
  const handleError = () => {
    state.error = false;
  };
  if (success) {
    return (
      <Alert status="success">
        <AlertIcon />
        <Box>
          <AlertDescription>
            Signup Successful , you are now a member of kindmeal Family
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={handleSuccess}
        />
      </Alert>
    );
  }
  if (state.error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={handleError}
        />
      </Alert>
    );
  }
  return (
    <>
      <Flex>
        <Box p="2">
          <Image
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="kindmeal logo"
          />
        </Box>
        <Spacer />

        {!state.name ? (
          <Box>
            <Button onClick={onOpen} p="4" colorScheme="blue" mt={7}>
              Signup on Kindmeal
            </Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input
                      onChange={handleChange}
                      value={signup.username}
                      name="username"
                      placeholder="Username"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      value={signup.email}
                      onChange={handleChange}
                      name="email"
                      placeholder="Email address"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      value={signup.password}
                      type="password"
                      onChange={handleChange}
                      name="password"
                      placeholder="Password must contain 8 letters"
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Phone No.</FormLabel>
                    <Input
                      value={signup.phone}
                      onChange={handleChange}
                      type="number"
                      name="phone"
                      placeholder="Phone No."
                    />
                  </FormControl>
                </ModalBody>
                <Flex gap="1rem" ml={8} mb={2}>
                  <Button
                    isLoading={state.loading}
                    onClick={() => handleSignup(signup)}
                    colorScheme="red"
                    mr={1}
                    w="180px"
                  >
                    Signup
                  </Button>
                  <Button onClick={onClose} w="180px">
                    Cancel
                  </Button>
                </Flex>
              </ModalContent>
            </Modal>
            <Button
              onClick={handleLogin}
              colorScheme="blue"
              mr={3}
              mt={7}
              ml={3}
            >
              Login
            </Button>
          </Box>
        ) : (
          <Box>
            <Text> hii {state.name}</Text>
          </Box>
        )}
      </Flex>
      <Box
        color="white"
        gap="35px"
        display="flex"
        alignItems="centre"
        justifyContent="centre"
        fontSize="22px"
        height="auto"
        bg={bg}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2F855A" : "#68D391",
            color: "white",
            marginLeft: "220px",
            padding: "10px",
          })}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/uyg"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2F855A" : "#68D391",
            color: "white",
            padding: "10px",
          })}
          end
        >
          Meal Deals
        </NavLink>
        <NavLink
          to="/product"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2F855A" : "#68D391",
            color: "white",
            padding: "10px",
          })}
        >
          KindMoments
        </NavLink>
        <NavLink
          to="/juyhg"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2F855A" : "#68D391",
            color: "white",
            padding: "10px",
          })}
          end
        >
          Hot Picks
        </NavLink>
        <NavLink
          to="/kiuh"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2F855A" : "#68D391",
            color: "white",
            padding: "10px",
          })}
          end
        >
          Recipes
        </NavLink>
        <NavLink
          to="/uyg"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2F855A" : "#68D391",
            color: "white",
            padding: "10px",
          })}
          end
        >
          Directory
        </NavLink>
        <NavLink
          to="/iuyg"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2F855A" : "#68D391",
            color: "white",
            padding: "10px",
          })}
          end
        >
          Articles
        </NavLink>
        <NavLink
          to="/iuytg"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2F855A" : "#68D391",
            color: "white",
            padding: "10px",
          })}
          end
        >
          Help
        </NavLink>
      </Box>
    </>
  );
}

export default Navbar;
