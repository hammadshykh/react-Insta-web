import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Box,
  ButtonGroup,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
  Avatar,
  Center,
  useColorModeValue,
  Link,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import "./insta.container.css";

import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiMessageRoundedDetail, BiHeart } from "react-icons/bi";
import {
  MdOutlineExplore,
  MdVideoLibrary,
  MdCreateNewFolder,
  MdOutlineCreateNewFolder,
} from "react-icons/md";
import InstaCard from "../InstaCard/InstaCard";
import InstaStory from "../instaStory/InstaStory";
import RightContent from "../RightContent/RightContent";

const InstaPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        display={["none", "block", "none", "none", "none"]}
      >
        <Box>
          <Flex justifyContent="start" w="110px" mb="30px" pt="45px">
            <Image src="/image/instagram.jpg" />
          </Flex>
        </Box>
        <Box w="400px">
          <Flex alignItems="center">
            <Text fontSize="25px" color="white">
              <BsSearch />
            </Text>
            <FormControl mx="10px">
              <Input
                backgroundColor="#0000"
                type="email"
                placeholder="Search"
                _placeholder={{ fontSize: "12px" }}
                ps="10px"
              />
            </FormControl>
            <Text fontSize="25px" color="white">
              <BiHeart />
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box display="flex">
        <Box
          // display={["flex", "flex", "block", "block", "block"]}
          // alignItems="flex-end"
          position={["absolute", "absolute", "absolute", "unset", "unset"]}
          bottom="0"
          w={["0px", "0px", "45px", "150px", "230px"]}
          borderRight="0.3px solid"
          borderRightColor="gray.800"
        >
          <Flex
            justifyContent="start"
            w="110px"
            mb="30px"
            pt="45px"
            display={["none", "none", "none", "block", "block"]}
          >
            <Image src="/image/instagram.jpg" />
          </Flex>
          <Flex
            justifyContent="start"
            w="30px"
            mb="30px"
            pt="45px"
            display={["none", "none", "block", "none", "none"]}
          >
            <Image src="/image/images.png" />
          </Flex>
          <Flex>
            <ButtonGroup
              display="flex"
              variant="link"
              flexDirection={["row", "row", "column", "column", "column"]}
            >
              {[
                { btnName: "Home", btnIcon: <AiFillHome /> },
                { btnName: "Search", btnIcon: <BsSearch /> },
                { btnName: "Explore", btnIcon: <MdOutlineExplore /> },
                { btnName: "Reels", btnIcon: <MdVideoLibrary /> },
                {
                  btnName: "Messages",
                  btnIcon: <BiMessageRoundedDetail />,
                },
                { btnName: "Notification", btnIcon: <BiHeart /> },
                {
                  btnName: "Create",
                  btnIcon: <MdOutlineCreateNewFolder />,
                },
                { btnName: "Profile", btnIcon: <CgProfile /> },
              ].map((item) => (
                <Button
                  justifyContent={[
                    "center",
                    "center",
                    "Center",
                    "start",
                    "start",
                  ]}
                  _hover={{ bg: "#36363652", borderRadius: "24px" }}
                  color="#fff"
                  mb={["16px"]}
                  w={["10px", "10px", "10px", "200px", "200px"]}
                  py="8px"
                  fontWeight="400"
                  fontSize="16px"
                  fontFamily="normal"
                  px={["25.5px", "25.5px", "25px", "0", "0"]}
                >
                  <Text me="15px" fontSize="25px">
                    {item.btnIcon}
                  </Text>
                  <Text display={["none", "none", "none", "block", "block"]}>
                    {item.btnName}
                  </Text>
                </Button>
              ))}

              <Button
                my="12px"
                _hover={{ bg: "#36363652", borderRadius: "24px" }}
                ref={btnRef}
                onClick={onOpen}
                fontSize="17px"
                color="#fff"
                py="8px"
                w={["45px", "45px", "45px", "200px", "200px"]}
                justifyContent="start"
                display={["none", "none", "none", "block", "block"]}
              >
                <Text me="15px" fontSize="25px">
                  <AiOutlineMenu />
                </Text>
                <Text display={["none", "none", "none", "block", "block"]}>
                  More
                </Text>
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent w="200px" height="200px" bg="gray" color="white">
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>
                  <DrawerBody>
                    <Input placeholder="Type here..." />
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </ButtonGroup>
          </Flex>
        </Box>
        <Box w="850px" mx="auto" pt="45px" pb="60px">
          <Flex
            justifyContent={[
              "center",
              "center",
              "center",
              "center",
              "space-between",
            ]}
          >
            <Box>
              <Flex mb="30px" fontSize="12">
                <InstaStory />
              </Flex>
              <InstaCard />
            </Box>
            <RightContent />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default InstaPage;
