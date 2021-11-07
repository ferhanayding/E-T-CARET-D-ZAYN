import React from 'react'

import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, MailOutline,  Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div`


display: flex;
margin-top : 15px;
${mobile({ flexDirection: "column" })}

`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
margin-left : 20px;


`
const Logo = styled.h1`

`
const Desc = styled.div`
margin : 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


const Center = styled.div`
flex:1;
${mobile({ display: "none" })}

`
const Title = styled.h3`
margin-Bottom : 30px;
`
const List = styled.ul`
margin : 0;
padding : 0;
list-style : none;
display: flex;
flex-wrap : wrap;
`
const ListItem = styled.li`
width : 50%;
margin-bottom : 10px;
`
const Right = styled.div`
flex:1;
${mobile({ backgroundColor: "#fff8f8" })}

`
const ContactItem = styled.div`
margin-bottom : 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
cursor : pointer;
width : 50%;
`

const Footter = () => {
    return (
        <Container>
            <Left>
            <Logo>D-JANGO.</Logo>
            <Desc>
                Lise çağındaki bir çocuk okula kayıt olmak için gider.Müdür sorar,
                 "Oğlum adın ne?"Çocuk: Memehmet yayayayakut
                  Müdür: Oğlum kekeme misin sen? Çocuk: Hayır hocam, babam kekemeydi
                  </Desc>
                  <SocialContainer>
                    <SocialIcon color= "3B5999" >
                    <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color= "E4405F">
                    <Instagram/>
                    </SocialIcon>
                    <SocialIcon color= "55ACEE">
                    <Twitter/>
                    </SocialIcon >
                    <SocialIcon color= "E60023">
                    <Pinterest/>
                    </SocialIcon>
                  </SocialContainer>
            </Left>
            <Center>
                <Title>Kullanışlı Alan</Title>
                <List>
                    <ListItem>Ana Sayfa</ListItem>
                    <ListItem>Sepet</ListItem>
                    <ListItem>Erkek Modası</ListItem>
                    <ListItem>Kadın Modası</ListItem>
                    <ListItem>Aksesuarlar</ListItem>
                    <ListItem>Hesabım</ListItem>
                    <ListItem>Sipariş Takipçisi</ListItem>
                    <ListItem>Favoriler</ListItem>
                    <ListItem>Terimler</ListItem>
                </List>
            </Center>
            <Right>
            <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Pirshaxı Şehri , Franbuaz Sokak 46573. 
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +994502140408
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@django.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footter
