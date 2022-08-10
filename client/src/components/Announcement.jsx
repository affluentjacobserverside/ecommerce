import styled from "styled-components"

const Container = styled.div`
height: 50px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 700;
margin-top: 20px;
`

const Announcement = () => {
  return (
    <Container>
       Super Deal! Free Shipping on Orders Over $200.
    </Container>
  )
}

export default Announcement