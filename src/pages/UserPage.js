import UserHeader from "../components/UserHeader"
import UserPosts from "../components/UserPosts"


const UserPage = () => {
  return(
<>
  <UserHeader />
  <UserPosts userAvatar={"https://bit.ly/tioluwani-kolawole"}
  username={"kolisco"}
  postImage={"/post1.png"}
  postTitle={"Hello, eku ojo merin nile yii o "}
  
  />
  <UserPosts />
  <UserPosts />
  <UserPosts />
  <UserPosts />
  <UserPosts />
  <UserPosts />
  <UserPosts />
  </>

  )
 
  
}

export default UserPage