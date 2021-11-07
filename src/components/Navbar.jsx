import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
const Container = styled.div`
  height : 60px;
  ${mobile({ height: "50px" })}

  
`
const Wrapper = styled.div`
padding : 10px 20px;
display :flex;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}


`
const Left = styled.div`
flex : 1;
display : flex;
align-items : center;
`

const Language = styled.span`
cursor:pointer;
font-size:14px;
${mobile({ display: "none" })}

`
const SerchContainer = styled.div`
border : 1px solid lightgray;
display : flex;
align-items: center;
margin-left: 25px;
padding : 5px;
border-radius : 5px;

`
const Input = styled.input`
border : none;
${mobile({ width: "50px" })}

`
// -------------------------------------------------------------------
const Center = styled.div`
flex : 1;
text-align : center;
`
const Logo = styled.h1`
font-weight : bold;
color : #827200;
font-family: 'Teko', sans-serif;
font-weight : 700;
${mobile({ fontSize: "24px" })}

`
// -------------------------------------------------------------------
const Right = styled.div`
flex : 1;
display : flex;
align-items : center;
justify-content : flex-end;
${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem = styled.div`
font-size : 14px;
cursor: pointer;
margin-left : 14px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
           <Left>
               <Language>EN</Language>
               <SerchContainer>
                   <Input/>
                   <Search style = {{color : "gray" , fontSize : "1em"}} />
               </SerchContainer>
           </Left>
           <Center>
               <Logo>
                   D-JANGO
               </Logo>
           </Center>
           <Right>
               <MenuItem>REGISTER</MenuItem>
               <MenuItem>SIGN IN</MenuItem>
               <MenuItem>
               <Badge badgeContent={4} color="primary">
               <ShoppingCartOutlinedIcon />
               </Badge>
               </MenuItem>
           </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
