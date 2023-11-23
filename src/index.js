import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react" 
import { ColorModeScript } from '@chakra-ui/color-mode'
import { BrowserRouter } from 'react-router-dom';


const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha:900")(props),
      bg: mode("gray.100", "#101010")(props)
    },
  })
}

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e"
  }
}


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({config, styles, colors})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
