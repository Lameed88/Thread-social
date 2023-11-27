import{ Avatar } from "@chakra-ui/avatar"
import { Link } from 'react-router-dom'
import { Flex } from "@chakra-ui/layout"


const UserPosts = () => {
  return 

    <Link to={"/aliumusa/post/1"}>
       <Flex gap={3} mb={4} py={5}>
        <Flex >
            <Avatar src="/post1.png" />
        </Flex>
       </Flex>

    </Link>

}

export default UserPosts