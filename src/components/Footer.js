import React from "react";
import styled from 'styled-components';

function Footer(){
  return (
    <Elements>
    <li>Tesla © 2021</li>
    <li>Privacy & Legal</li>
    <li>Contact</li>
    <li>Careers</li>
    <li>News</li>
    <li>Engage</li>
    <li>Locations</li>
    </Elements>
  );
};
export default Footer;

   
const Elements=styled.div`
max-width:450px;
margin:25px auto;
font-weight:bold;
display:flex;
align-items:center;
justify-content:space-around;
color:rgb(127,128,131);
font-size:11px;
margin-bottom:10px;
li{
  width:100px;
  margin:1px;
  list-style:none;
  cursor:pointer;
  padding:2px;
}
@media(max-width:600px){
    flex-direction:column;
    align-content:center;
    justify-content:space-between;
    margin-top:30px;
    margin-bottom:30px;
}`
