import React from 'react';
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
function Lastsection({title,descn,lbtxt,bilink}) {
    return (
        <div>
        <Container bImg={bilink}>
        <TitleText>
        <Fade bottom>
            <h1>{title}</h1>
        </Fade>
        </TitleText>
        <Fade bottom>
        <Content>
        <Button>
        {lbtxt}
        </Button>
        </Content></Fade>
        </Container>
        </div>
    )
}

export default Lastsection

const Container=styled.div`
z-index:-1;
padding-top:70px;
height:100vh;
width:100%;
background-image:${props =>`url("/Images/${props.bImg}")`};
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`
const TitleText=styled.div`
color:rgb(57,60,65);
font-size:20px;
padding:80px;
`

const Button=styled.div`
width:300px;
height:40px;
font-size:13px;
background:rgb(48,50,55,0.8);
display:flex;
align-items:center;
font-weight:bold;
justify-content:center;
text-transform:uppercase;
color:white;
border-radius:25px;
cursor:pointer;
margin:10px;
`

const Content=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:30px;
`
