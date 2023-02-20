import {
  Box,
  Flex,
  FormControl,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiHeart, BiMessageRounded, BiSave, BiShareAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const InstaCard = () => {
  return (
    <Box
      w="470px"
      color="#fff"
      borderBottom="0.5px solid"
      borderColor="gray.600"
    >
      <Flex alignContent="center" justifyContent="space-between" my="10px">
        <Flex alignItems="center" fontSize="30px">
          <CgProfile />
          <Text display="flex" fontSize="14px" ms="10px">
            <Link>icc</Link>
            <Text mx="5px">and</Text>
            <Link>T20worldCup</Link>
          </Text>
        </Flex>
        <Link _hover={{ textDecorationLine: "none", color: "gray" }}>...</Link>
      </Flex>
      <Image src="/image/biryani.jpg" class="card-img-top" alt="..." />
      <Box class="card-body text-white">
        <Flex fontSize="30px" my="10px" justifyContent="space-between">
          <Flex>
            <Text>
              <BiHeart />
            </Text>
            <Text mx="10px">
              <BiMessageRounded />
            </Text>
            <Text>
              <BiShareAlt />
            </Text>
          </Flex>
          <Box>
            <BiSave />
          </Box>
        </Flex>
        <h5 class="card-title">17,896.Likes</h5>
        <Text fontSize="14px" my="8px">
          This is a wider card with supporting
        </Text>
        <Link
          fontSize="14px"
          color="gray"
          _hover={{ textDecorationLine: "none" }}
        >
          View all 62 comments
        </Link>
      </Box>
      <Input
        border="none"
        background="transparent"
        type="email"
        placeholder="Add a comment.."
        _placeholder={{ fontSize: "13px" }}
        p="0"
      />
    </Box>
  );
};

export default InstaCard;
