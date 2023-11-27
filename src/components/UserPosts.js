import { Avatar, Flex, Box, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Actions from "./Actions";
import { useState } from "react";


   
const UserPosts = ({userAvatar, username, postTitle, postImage}) => {
   const [liked, setLiked] = useState(false)
  return (
    <Link to={"/aliumusa/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Avatar src="/post1.png" name="Mark Zuckerberg" size={"md"} />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              src="/post1.png"
              name="Mark Zuckerberg"
              size={"xs"}
              position={"absolute"}
              top={0}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Bell shmurda"
              size={"xs"}
              position={"absolute"}
              bottom={0}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Danfo driver"
              size={"xs"}
              position={"absolute"}
              bottom={0}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDir={"column"} gap={2}>
          <Flex w={"full"} justifyContent={"space-between"}>
            <Flex alignItems={"center"} w={"full"}>
              <Text>AliuMusa</Text>
              <Image src="/verified.png" ml={1} w={4} h={4} />
            </Flex>

            <Flex alignItems={"center"} gap={4}>
              <Text>1day</Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>Hello Thread!!!</Text>
          <Box overflow={"hidden"} borderRadius={6} border={"1px solid"} borderColor={"gray.light"}>
            <Image src="/aliumusa.jpeg" />
          </Box>
          <Flex>
            <Actions liked={liked}  setLiked={setLiked}/>
          </Flex>
          <Flex gap={2} color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
            <Text >1222 Replies</Text>
           <Box w={.5} h={.5} borderRadius={"full"} bg={"green"} >

           </Box>
            <Text>3390 likes</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPosts;
