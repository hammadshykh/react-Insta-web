import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoMicrosoft, IoLogoGooglePlaystore } from "react-icons/io5";
import Container from "../Containerr/Container";
import { default as InstaLocalData } from "../InstaLocalData/InstaLocal.json";
console.log(InstaLocalData);
const Login = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inValid, setInvalid] = useState(false);
  const [isAlert, setIsAlert] = useState({
    type: "danger",
    msg: "Something went wrong.",
    isOpen: false,
  });
  const showAlertHandler = (type = "danger", msg = "") => {
    setIsAlert((oldState) => {
      return {
        ...oldState,
        isOpen: true,
        type,
        msg,
      };
    });

    setTimeout(() => {
      setIsAlert((oldState) => {
        return {
          ...oldState,
          isOpen: false,
        };
      });
    }, 3000);
  };

  const inputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };
  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
  };

  const submitHandler = () => {
    InstaLocalData.map((json) => {
      if (inputEmail === "" || inputPassword === "") {
        showAlertHandler("danger", "Please enter the value");
        return;
      }
      if (inputEmail === json.email || inputEmail === json.password) {
        console.log("correct");
        setInvalid(true);
      } else {
        console.log("InCorrect");
        setInvalid(false);
      }
    });
  };

  return (
    <div>
      <Container>
        <Flex justifyContent="center" alignItems="center">
          <Box
            w="50%"
            display={["none", "none", "inline-block", "inline-block"]}
          >
            <Image
              fallbackSrc="/image/iphone-x-mockup (3).png"
              boxSize="680px"
              objectFit="cover"
              ms="-4em"
            />
            <Image
              fallbackSrc="/image/iphone-x-mockup.png"
              boxSize="680px"
              objectFit="cover"
              mt="-41.5em"
              ms="2em"
            />
          </Box>
          <Box>
            <Box
              border="0.5px solid "
              borderColor="gray.300"
              p="2.5em"
              textAlign="center"
              w="350px"
              shadow="md"
            >
              <Flex justifyContent="center" py="12px">
                <Image src="/image/download.png" w="75%" />
              </Flex>
              {isAlert.isOpen && (
                <p className={`alert alert-${isAlert.type}`}>{isAlert.msg}</p>
              )}
              <FormControl mt="8px">
                <Input
                  onChange={inputEmailHandler}
                  value={inputEmail}
                  type="email"
                  placeholder="Phone number, Username, or email"
                  _placeholder={{ fontSize: "12px" }}
                />
              </FormControl>
              <FormControl mt="8px">
                <Input
                  value={inputPassword}
                  type="password"
                  placeholder="password"
                  _placeholder={{ fontSize: "12px" }}
                  onChange={inputPasswordHandler}
                />
              </FormControl>
              <Link to={inValid && "/InstaPage"}>
                <Button
                  size="sm"
                  w="full"
                  colorScheme="twitter"
                  my="10px"
                  onClick={submitHandler}
                >
                  Login
                </Button>
              </Link>
              <Text fontSize="13px" color="gray" my="5px">
                OR
              </Text>
              <Text
                color="blue"
                my="15px"
                fontSize="14px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <AiFillFacebook fontSize="23px" />
                <Link ms="5px">Log in with Facebook</Link>
              </Text>
              <Text fontSize="12px">
                <Link>Forget Password</Link>
              </Text>
            </Box>
            <Box
              my="10px"
              py="10px"
              border="0.5px solid "
              borderColor="gray.300"
              textAlign="center"
              w="350px"
              shadow="md"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                my="10px"
                fontSize="13px"
              >
                <Link mx="5px" fontWeight="bold">
                  Don't have an account?
                </Link>
                <Text color="blue.400" mx="5px" fontWeight="bold">
                  <Link to="/Sign-up">SignUp</Link>
                </Text>
              </Flex>
            </Box>
            <Text fontSize="14px" textAlign="center">
              Get the app.
            </Text>
            <Flex justifyContent="center" my="10px">
              <Button
                colorScheme="blackAlpha"
                me="9px"
                size="sm"
                textAlign="start"
                bg="black"
                color="white"
                borderRadius="none"
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <IoLogoGooglePlaystore fontSize="25px" />
                  <Box ms="5px">
                    <Text fontSize="5px">store</Text>
                    <Text fontSize="12px">Google play</Text>
                  </Box>
                </Flex>
              </Button>
              <Button
                borderRadius="none"
                colorScheme="blackAlpha"
                size="sm"
                textAlign="start"
                bg="black"
                color="white"
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <IoLogoMicrosoft fontSize="25px" />
                  <Box ms="5px">
                    <Text fontSize="5px">Get in from</Text>
                    <Text fontSize="12px">Microsoft</Text>
                  </Box>
                </Flex>
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Box as="section" pb={{ base: "12", md: "24" }}>
          <Box as="nav" bg="bg-surface" boxShadow="sm">
            <Box py={{ base: "4", lg: "5" }}>
              <HStack spacing="10" justify="space-between">
                {isDesktop ? (
                  <Flex justify="space-between" flex="1">
                    <ButtonGroup
                      variant="link"
                      spacing="5"
                      display="flex"
                      justifyContent="centet"
                      textAlign="center"
                    >
                      {[
                        "Meta",
                        "About",
                        "Blog",
                        "Jobs",
                        "Help",
                        "API",
                        "Privacy",
                        "Terms",
                        "Top Accounts",
                        "Locations",
                        "Instagram Lite",
                        "Contact Uploading",
                        "& Non-Users",
                      ].map((item) => (
                        <Button fontSize="12px" color="gray" key={item}>
                          {item}
                        </Button>
                      ))}
                    </ButtonGroup>
                  </Flex>
                ) : (
                  <Button>menue</Button>
                )}
              </HStack>
              <Text textAlign="center" fontSize="13px" my="10px" color="gray">
                © 2023 Instagram from Meta
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
