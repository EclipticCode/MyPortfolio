import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const App = () => {
  return (
    
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
        <Navbar/>
        <Body>
        <Hero/>
        <Skills/>
        </Body>
        </BrowserRouter>
      </ThemeProvider>
    
  )
}

export default App