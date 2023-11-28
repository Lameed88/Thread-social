import { Avatar, Flex, Box, Image, Text, MenuList, MenuItem, MenuButton, Menu, MenuGroup, MenuDivider } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Actions from "./Actions";
import { useState } from "react";

const UserPosts = ({ likes, replies, postTitle, postImage }) => {
  const [liked, setLiked] = useState(false);
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

            <Flex alignItems={"center"} gap={4} onClick={(e) => e.preventDefault()}>
              <Text>1day</Text>
              {/* <Menu>
                                <MenuButton>
                                    <BsThreeDots cursor={'pointer'}  />
                                </MenuButton>
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem color={'gray.light'} bg={"white"}>Mute</MenuItem>
                                    </MenuGroup>
                                    <MenuDivider />
                                    <MenuGroup>
                                        <MenuItem color={'red'}>Block</MenuItem>
                                        <MenuItem color={'gray.light'} bg={"white"}>Hide</MenuItem>
                                    </MenuGroup>
                                    <MenuDivider />
                                    <MenuGroup>
                                        <MenuItem color={'red'}>Report</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </Menu> */}
              <Menu bg={"gray.dark"}>
              <MenuButton >
              <BsThreeDots size={24} cursor={"pointer"} />
              </MenuButton>
 
                <MenuList >
                  <MenuGroup>
                  <MenuItem bg={"gray.dark"} color={"white"} >Mute</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                  <MenuItem bg={"gray.dark"} color={"red"} >Block</MenuItem>
                  <MenuItem bg={"gray.dark"} color={"white"} >Hide</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                  <MenuItem bg={"gray.dark"} color={"red"} >Report</MenuItem>
                  <MenuDivider />
                  </MenuGroup>
                </MenuList>
              
            </Menu>

            </Flex>
          </Flex>
          <Text fontSize={"sm"}> {postTitle}</Text>
          {postImage && (
          <Box
            overflow={"hidden"}
            borderRadius={6}
            border={"1px solid"}
            borderColor={"gray.light"}
          >
            <Image src={postImage}  w={"full"}/>
          </Box>
          )}
          <Flex>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>
          <Flex
            gap={2}
            color={"gray.light"}
            fontSize={"sm"}
            alignItems={"center"}
          >
            <Text>{replies} Replies</Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"green"}></Box>
            <Text>{likes} likes</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPosts;
