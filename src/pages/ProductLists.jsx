import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footter from '../components/Footter'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import { mobile } from "../responsive";

const Container = styled.div``
const Title = styled.h1`
margin : 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;


`
const Filter = styled.div`
margin : 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}


`
const FilterText = styled.span`
font-size: 20px;
font-weight : 600;
margin-right : 20px;  
${mobile({ marginRight: "0px" })}

`
const Select = styled.select`
padding : 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}

`
const Option = styled.option`
s
`
const ProductLists = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>dresses</Title>
            <FilterContainer>
            <Filter>
                <FilterText>Ürünleri Filtrele</FilterText>
                <Select>
                    <Option disabled selected>
                        Renkler
                    </Option>
                    <Option bg= "white" >Beyaz</Option>
                    <Option bg= "black" >Siyah</Option>
                    <Option bg = "red" >Kırmızı</Option>
                    <Option bg = "blue" >Mavi</Option>
                    <Option bg = "yellow" >Sarı</Option>
                    <Option bg = "green" >Green</Option>
                </Select>
                <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
            </Filter>
            <Filter>
            <FilterText>Ürünleri Sırala</FilterText>
            <Select>
            <Option selected>En Yeni</Option>
            <Option>Fiyat (artan)</Option>
            <Option>Fiyat (azalan)</Option>
          </Select>
            </Filter>

            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footter/>
                    </Container>
    )
}

export default ProductLists
