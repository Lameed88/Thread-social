
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';



function App() {

  
  return (
    <Container maxW="620px"> 
    <Routes>
      <Route path="/:username" element={<UserPage />}/>
      <Route path="/:username/post/:pid" element={<postPage />}/>
    </Routes>
    <UserPage />

    </Container>
 
  );
}

export default App;
