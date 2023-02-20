import { Box, Flex, Image, Text } from "@chakra-ui/react";

const localData = [
  { profile: "/image/iphone-x-mockup.png", Pame: "hammad" },
  { profile: "/image/iphone-x-mockup (3).png", Pame: "ahmed" },
  { profile: "/image/iphone-x-mockup.png", Pame: "rehan" },
  { profile: "/image/iphone-x-mockup.png", Pame: "sufiyan" },
  { profile: "/image/iphone-x-mockup.png", Pame: "madikh" },
  { profile: "/image/iphone-x-mockup.png", Pame: "ayan" },
];

const InstaStory = () => {
  return (
    <Flex>
      {localData.map((data) => (
        <Box mx="8px" color="white" textAlign="center">
          <Image
            cursor="pointer"
            borderRadius="full"
            boxSize="63px"
            border="2px solid"
            borderColor="pink"
            src={data.profile}
          />
          <Text my="5px">{data.Pame}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default InstaStory;
