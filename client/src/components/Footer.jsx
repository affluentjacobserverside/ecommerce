import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Pinterest from '@mui/icons-material/Pinterest';
import Room from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/Phone';
import Mail from '@mui/icons-material/Mail';
import styled from "styled-components"
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;


const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none"})}
`;

const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;


const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#eee"})}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
width: 50%;

`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Kesty</Logo>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, sapiente a? 
            Beatae, vero sunt rerum maiores a cum odit quia.
        </Desc>
        <SocialContainer>
        <SocialIcon color="3B5999">
            <Facebook/>
        </SocialIcon>
        <SocialIcon color="E4405F">
            <Instagram/>
        </SocialIcon>
        <SocialIcon color="55ACEE">
            <Twitter/>
        </SocialIcon>
        <SocialIcon color="E60023">
            <Pinterest/>
        </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}} /> 5 Eliozu Road, Eliozu Port Harcourt, Nigeria.
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}} /> +234 0806070055
        </ContactItem>
        <ContactItem>
            <Mail style={{marginRight:"10px"}} /> contact@kesty.com
        </ContactItem>
        <Payment src=""/>
      </Right>
    </Container>
  )
}

export default Footer
