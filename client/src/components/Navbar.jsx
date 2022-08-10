import React from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { Badge } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive";

const Container = styled.div`
height: 60px;
${mobile({ height: "50px"})}
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ padding: "10px 0px"})}
`;
const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`;
const Language = styled.span`
font-size: 14px;
cursor:pointer;
${mobile({ display: "none"})}
`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
cursor: pointer;
display: flex;
align-items: center;
margin-left:10px;
margin-right: 5px;
padding: 5px;
`;
const Input = styled.input`
border:none;
width: 50px;

`;

const Center = styled.div`
flex:1;
text-align:center;
`;
const Logo = styled.h2`
font-weight:bold;
${mobile({fontSize: "20px"})}
`;

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent: "center"})}
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft: "10px"})}
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="search"/>
          <FaSearch style={{color: "gray", fontSize: 16}}/>
        </SearchContainer>
      </Left>
      <Center><Logo>Kesty.</Logo></Center>
      <Right>
       <MenuItem>Register</MenuItem>
       <MenuItem>Sign In</MenuItem>
       <MenuItem>
       <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlined/>
       </Badge>
       </MenuItem>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar