import React,{useState}from 'react';
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Header(){
    const [sidebarstate,setbar]= useState(false); 
    return(
        <Container>
        <Items>
        <a>
        <img src="Images/logo.svg" />
        </a>
        <Menu>
        <LMenu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
        </LMenu>
        <RMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        </RMenu>
        </Menu>
        <MenuBtn onClick={()=> setbar(true)}>
        <a href="#">Menu</a>
        </MenuBtn>
        </Items>
        <SideBar show={sidebarstate}>
        <ClsBtn>
        <CloseIcon onClick={()=>setbar(false)}/>
        </ClsBtn>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Account</a></li>
        <Morebtn>
        <li><a href="#">More</a></li>
        <ArrowForwardIosIcon className='icon' fontSize='inherit' color='primary' />
        </Morebtn>
        </SideBar>
        </Container>
        )
    }
export default Header
const Container=styled.div`
display:flex;
`

const Items=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
a{
    cursor:pointer;
    width:110px;
}   
img{
    width:120px;
    height:15px;
    margin-left:20px;
    display:flex;
}
`
const Menu=styled.div`
display:flex;
// align-items:center;
height:35px;
justify-content:space-between;
max-width:70%;
a{
    flex:1;
    font-weight:600;
    padding:0 5px;
    font-size:15px;
    &:hover{
        transition-duration:0.8s;
        background:rgb(0,0,0,0.11);
        border-radius:5px;
        text-align:center;
    }
}
`

const LMenu=styled.div`

max-width:650px;
margin:auto;
display:flex;
flex-wrap:no-wrap;
@media(max-width:1200px){
    display:none;
}
`

const RMenu=styled.div`
max-width:1px;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:no-wrap;
@media(max-width:1200px){
    display:none;
}
`
const MenuBtn=styled.div`
max-width:70px;
@media(max-width:1200px){
background:rgb(213,210,210,0.15);
width:80px;
height:30px;
display:flex;
align-items:center;
border-radius:11px;
}
a{
font-weight:600;
font-size:15px;
}
`
const ClsBtn=styled.div`
display:flex;
align-content:center;
justify-content:flex-end;
cursor:pointer;
`
const SideBar =styled.div`
position:fixed;
z-index:1;
top:0;
bottom:0;
right:0;
padding:25px;
z-index:16;
list-style: none;
text-align:start;
width:300px;
background:white;
transform: ${props => props.show ?'translateX(0%)':'translateX(100%)'};
transition: 0.2s ease-in;
overflow:scroll;
li{
    padding:10px;
    font-size:15px;
    font-weight:500;
    &:hover{
        transition-duration:0.8s;
        background:rgb(0,0,0,0.11);
        border-radius:5px;
    }
}
`
const Morebtn=styled.div`
&:hover{
    transition-duration:0.5s;
    background:rgb(0,0,0,0.1);
    border-radius:5px;
}
display:flex;
align-content:center;
cursor:pointer;
.icon{
    margin-top:15px;
}
li{
    a{
        width:200px;
    }
}
`