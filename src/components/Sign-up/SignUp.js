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
  IconButton,
  Image,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Container from "../Containerr/Container";

import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoGooglePlaystore, IoLogoMicrosoft } from "react-icons/io5";

const SignUp = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
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
              <Flex justifyContent="center">
                <Image src="/image/download.png" w="70%" />
              </Flex>
              <Text color="gray" fontSize="17px" my="9px" lineHeight="1.2">
                Sign up to see photos and videos from your friends.
              </Text>
              <Button size="sm" w={"full"} colorScheme={"twitter"} my="10px">
                <AiFillFacebook fontSize="23px" />
                <Text ms="10px" fontWeight="400">
                  Login in with Facebook
                </Text>
              </Button>
              <Flex align="center" justifyContent="space-between">
                <Box
                  w="40%"
                  height="0.5px"
                  background="inherit"
                  backgroundColor="gray.300"
                ></Box>
                <Text color="gray" fontSize="13px">
                  OR
                </Text>
                <Box
                  w="40%"
                  height="1px"
                  background="inherit"
                  backgroundColor="gray.300"
                ></Box>
              </Flex>
              <FormControl mt="8px">
                <Input
                  backgroundColor="#fafafa"
                  type="email"
                  placeholder="Mobile Number Or Email"
                  _placeholder={{ fontSize: "12px" }}
                  ps="10px"
                />
              </FormControl>
              <FormControl mt="8px">
                <Input
                  backgroundColor="#fafafa"
                  ps="10px"
                  type="email"
                  placeholder="Full Name"
                  _placeholder={{ fontSize: "12px" }}
                />
              </FormControl>
              <FormControl mt="8px">
                <Input
                  backgroundColor="#fafafa"
                  ps="10px"
                  type="email"
                  placeholder="Username"
                  _placeholder={{ fontSize: "12px" }}
                />
              </FormControl>
              <FormControl mt="8px">
                <Input
                  backgroundColor="#fafafa"
                  ps="10px"
                  type="email"
                  placeholder="password"
                  _placeholder={{ fontSize: "12px" }}
                />
              </FormControl>
              <Text fontSize="12px" my="10px" color="gray">
                People who use our service may have uploaded your contact
                information to Instagram. Learn More
              </Text>
              <Text fontSize="12px" color="gray">
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy .
              </Text>
              <Button size="sm" w="full" mt="10px" bg="blue.300" color="white">
                Sign Up
              </Button>
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
              <Flex justifyContent="center" alignItems="center" my="10px">
                <Link>Have an account?</Link>
                <Text fontSize="14px" textAlign="center" color="blue" ms="5px">
                  <Link to="/Login"> Log in</Link>
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
                    <Text fontSize="15px">Google play</Text>
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
                    <Text fontSize="15px">Microsoft</Text>
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

export default SignUp;
