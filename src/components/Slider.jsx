import React, { useState } from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import styled from 'styled-components'
import { sliderItems } from '../data';
import { mobile } from "../responsive";

    const Container = styled.div`
    widht : 100%;
    height : 100vh;
    display : flex;
    position : relative;
    overflow : hidden;
    ${mobile({ display: "none" })}

    `
    const Arrow = styled.div`
    width : 50px;
    height : 50px;
    background-color : #fff7f7;
    border-radius : 50%;
    display : flex;
    justify-content : center;
    align-items: center;
    position : absolute;
    top : 0;
    bottom : 0;
    left : ${props => props.direction === "left" && "10px"};
    right : ${props => props.direction === "right" && "10px"};
    margin : auto;
    cursor : pointer;
    opacity : 0.5;
    z-index : 2;
    `
    const Wrapper = styled.div`
    height : 100%;
    display : flex;
    transform : translateX(${props => props.slideIndex * -100}vw);
    transition : all 1.5s ease;

    `
    const Slide = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    align-items:center;
    background-color : #${props => props.bg};
    

    `
    const ImgContainer = styled.div`
    height : 100%;
    flex: 1;
    `
    const Image = styled.img`
    height : 90%;
    margin-left: 40px;
    
    `
    const InfoContainer = styled.div`
    flex: 1;
    padding : 50px;
    
    `
    const Title = styled.h1`
    font-size: 70px;
    `
    const Desc = styled.p`
    margin : 50px 0px;
    font-size : 20px;
    font-weight : 500;
    letter-spacing : 3px;
    `
    const Button = styled.button`
    padding : 10px;
    font-size : 20px;
    background-color : transparent;
    cursor : pointer;
    &:hover{
        background-color : grey;
        color : white ;
        font-weight : 500;
        transition : all 0.5s ease;
        font-size : 21px;
    }
    `

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            // slide index 0 da degilse -1 yap 0 da ise 2 ye yani sonuncuya getir
            setSlideIndex(slideIndex > 0 ? slideIndex-1 :2)
        }else{
            // slide index 2 de degilse slide indexi arttır tersiyse 0 a getir
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0) 
        }
    }
    return (
        <Container>
            <Arrow direction = "left" onClick = {() => handleClick("left")}>
                <ArrowBackIosNewOutlinedIcon  />
            </Arrow>
            <Wrapper slideIndex={slideIndex} >
                {sliderItems.map((item) =>(

                    <Slide bg = {item.bg} key ={item.id}>
                <ImgContainer>
                <Image src = {item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title><span style = {{color : "#827200"}} >D-JANGO</span> {item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>ŞİMDİ GÖSTER</Button>

                </InfoContainer>
                </Slide >
                    ))}
               
            </Wrapper>
            <Arrow direction = "right" onClick = {() => handleClick("right")}>
                <ArrowForwardIosOutlinedIcon  />
            </Arrow>
        </Container>
    )
}

export default Slider
