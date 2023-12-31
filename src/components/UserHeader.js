import { Box, Flex, VStack, Text, Link } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useToast } from '@chakra-ui/toast'
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";

const UserHeader = () => {
    const toast = useToast()
    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: 'Success',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        })
    }
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Aliu Musa
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>aliumusa@99</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="Aliu Musa" src="/directorPro.jpeg" size={{base: "md", md: "xl"}} />
        </Box>
      </Flex>
          
      <Text>Founder, excutive chairperson and CEO of DLTAfrica</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}> 3.2k followers</Text>
          <Box w={1} h={1} bg={"gray.light"} borderRadius="50%"></Box>
          <Link color={"gray.light"}>Instagram.com</Link>
        </Flex>
         
        <Flex gap={2}>
          <Box className="icon-container">
            {" "}
            <BsInstagram size={24} cursor={"pointer"} />{" "}
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"} >
                  <MenuItem bg={"gray.dark"} color={"white"} onClick={copyURL}>Click here </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w={'full'}>
        <Flex 
        flex={1}
        borderBottom={"1.5px solid white"}
        justifyContent={"center"}
        pb={"3"}
        cursor={"pointer"}>

        
            <Text fontWeight={"bold"}>Thread</Text>
        </Flex>
        <Flex 
         
         flex={1}
         borderBottom={"1.5px solid white"}
         justifyContent={"center"}
         pb={"3"}
         color={"gray.light"}
         cursor={"pointer"}> 
        
            <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
