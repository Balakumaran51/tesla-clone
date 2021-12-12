import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

function Firstsection({title,descn,lbtxt,rbtxt,bilink}) {
    return (
        <Container bImg={bilink}>
        <TitleText>
        <Fade bottom>
        <h1>{title}</h1>
        <p>{descn}</p>
        </Fade>
        </TitleText>
        <Content>
        <ButtonGrp>
        <LeftButton>
        <Fade left>
        {lbtxt}
        </Fade>
        </LeftButton>
        <RightButton>
        <Fade right>
        {rbtxt}</Fade>
        </RightButton>
        </ButtonGrp>
        <Fade top>
        <DownArrow src="Images/down-arrow.svg">
        </DownArrow>
        </Fade>
        </Content>
        </Container>
    )
}

export default Firstsection
const Container=styled.div`
z-index:-1;
padding-top:50px;
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
padding:60px;
h1{
    font-size:40px;
}
`

const ButtonGrp=styled.div`
display:flex;
align-items:center;
justify-content:center;
@media(max-width:640px){
    flex-direction:column;
}
`
const LeftButton=styled.div`
width:300px;
height:40px;
font-size:13px;
color:rgb(255,255,255);
background:rgb(48,50,55,0.8);
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
text-transform:uppercase;
border-radius:25px;
cursor:pointer;
margin:10px;
`

const RightButton=styled(LeftButton)`
color:black;
background:rgb(209,208,210,0.7);
`

const Content=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const DownArrow=styled.img`
width:40px;
height:50px;
animation:bounce 1.5s infinite;
`