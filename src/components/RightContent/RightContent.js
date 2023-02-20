import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

const localFollowdata = [
  {
    image: "/image/download.png",
    uName: "Rohan",
    followDetails: "Followed by areesha3291 + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "Rohan",
    followDetails: "Followed by areesha3291 + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "Rohan",
    followDetails: "Followed by areesha3291 + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "Rohan",
    followDetails: "Followed by areesha3291 + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "Rohan",
    followDetails: "Followed by areesha3291 + 5 more ",
  },
];

const RightContent = () => {
  return (
    <Box display={["none", "none", "none", "block", "block"]}>
      <Flex justifyContent="space-between" alignItems="center" w="320px">
        <Flex alignItems="center" color="#fff">
          <CgProfile fontSize="55px" />
          <Box ms="10px" fontSize="14px">
            <Text>its.hammadshaikh</Text>
            <Text color="gray">Mr々HムMMムD</Text>
          </Box>
        </Flex>
        <Link
          fontSize="12px"
          color="blue"
          ms="10px"
          _hover={{ textDecorationLine: "none", color: "white" }}
        >
          Switch
        </Link>
      </Flex>
      <Flex
        my="14px"
        justifyContent="space-between"
        alignItems="center"
        w="320px"
      >
        <Text fontSize="14px" color="gray">
          Suggestions for you
        </Text>
        <Link
          fontSize="12px"
          color="#fff"
          ms="10px"
          _hover={{ textDecorationLine: "none", color: "gray" }}
        >
          See All
        </Link>
      </Flex>
      {localFollowdata.map((data) => (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="320px"
          my="10px"
        >
          <Flex alignItems="center" color="#fff">
            <CgProfile fontSize="32px" />
            <Box ms="10px" fontSize="14px">
              <Text>{data.uName}</Text>
              <Text color="gray" fontSize="12px">
                {data.followDetails}
              </Text>
            </Box>
          </Flex>
          <Link
            fontSize="12px"
            color="blue"
            ms="10px"
            _hover={{ textDecorationLine: "none", color: "white" }}
          >
            Follow
          </Link>
        </Flex>
      ))}
    </Box>
  );
};

export default RightContent;
