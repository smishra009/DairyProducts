
import { useState } from "react";
import Brandname from "./Brandname";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode]=useState(false)
  const palatteType=darkMode?'dark':'light'
  const theme=createTheme({
    palette:{
      mode:palatteType,
      background:{
        default: palatteType==='light'?'#ffffff':'#000000'
      }
    }
  })
  function handleChange(){
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={theme}>
      <Brandname checked={darkMode} onChange={handleChange}/>
      <Container>
       <Outlet/>
      </Container>
    </ThemeProvider>
  )
}

export default App
