import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import SignUp from "../Sign-up/SignUp";
import { Route, Router, Routes } from "react-router-dom";

const SignIn = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <div>
      <Flex justifyContent="center" alignItems="center">
        <Box
          w="50%"
          display={{
            sm: "none",
            lg: "inline-block",
          }}
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
            p="1em"
            textAlign="center"
            w="350px"
            shadow="md"
          >
            <Flex justifyContent="center" py="12px">
              <Image src="/image/download.png" w="75%" />
            </Flex>
            <Text color="gray" fontSize="14px" my="9px">
              You can log into these accounts because they're in your Accounts
              Center.
            </Text>
            <Flex
              justifyContent="space-between"
              fontSize="13px"
              align="center"
              my="10px"
            >
              <Text fontWeight="bold">its.Hammadshaikh</Text>
              <Button size="sm" colorScheme="twitter">
                Login
              </Button>
            </Flex>
            <Flex justifyContent="space-between" fontSize="13px" align="center">
              <Text fontWeight="bold">its.Hammadshaikh</Text>
              <Button size="sm" colorScheme="twitter">
                Login
              </Button>
            </Flex>
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
              <Link color="blue.400" mx="5px" fontWeight="bold">
                Switch accounts
              </Link>
              <Text fontSize="14px" textAlign="center">
                or
                <Link color="blue.400" mx="5px" fontWeight="bold">
                  SignUp
                </Link>
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
                <Text>play</Text>
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
                <Text>play</Text>
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
    </div>
  );
};

export default SignIn;
