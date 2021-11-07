import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ProductItem from './ProductItem'

const Container = styled.div`
margin : 0px 50px;
padding : 20px;
display : flex;
max-width : 90%;
flex-wrap : wrap;
justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <ProductItem item = {item} key = {item.id} />
            ))

            }
        </Container>
    )
}

export default Products
