 import { Avatar, Flex, Text, Image} from '@chakra-ui/react'
 import { BsThreeDots } from "react-icons/bs"
import React from 'react'
 
 const PostPage = () => {
   return (
     
        <Flex w={"full"} gap={3} justifyContent={"space-between"} alignItems={"center"}>
         
           <Flex alignItems={"center"}>
           <Avatar src="/aliumusa.jpeg" size=
            {"md"}
            />
           <Text fontSize={"sm"}>Aliu musa</Text>
            <Image src="/verified.png" h={4} w={4} ml={2}/>
           </Flex>

           <Flex alignItems={"center"} gap={4}>
           <Text fontSize={{base: "xs", md:"sm"}} textAlign={"right"} w={36} color={"gray.light"}>2days</Text>
            <BsThreeDots />
           </Flex>
        </Flex>
   )
 }
 
 export default PostPage