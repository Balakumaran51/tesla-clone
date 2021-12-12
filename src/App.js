import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer.js"
function App() {
  return (
    <div className="App">
    <Container>
    <Header/>
    <Content/>
    </Container>
    <Footer className="footer"/>
    </div>
  );
}

export default App;

const Container=styled.div`
z-index:-1;
`
