import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height : 2em; 
background-color : teal;
color : white;
display : flex;
align-items : center;
justify-content : center;
font-size : 1.2em;
font-weight : 500;
`
const Announcement = () => {
    return (
        <Container>
            ne alırsan al 1 $ !!!
        </Container>
    )
}

export default Announcement
