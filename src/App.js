
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';


function App() {

  
  return (
    <Container maxW="620px"> 
    <Route>
      <Route path="/:username" element={<UserPage />}/>
      <Route path="/:username/post/:pid" element={<postPage />}/>
    </Route>
 
    </Container>
 
  );
}

export default App;
