import { SendOutlined } from '@mui/icons-material'

import styled from 'styled-components'
import { mobile } from "../responsive";


const Container = styled.div`

margin : 3px;
height :60vh; 
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.div`
letter-spacing : 1px;
font-weight : 500;
font-size: 30px;
margin : 20px 0px;
${mobile({ textAlign: "center" })}



`
const InputContainer = styled.div`
display: flex;
width: 50%;
height: 40px;
justify-content: space-between;
background-color: #FFFFFF;
border : 1px solid lightgray;
${mobile({ width: "80%" })}


`
const Input = styled.input`
padding : 4px;
border : none;
font-size : 20px;
border : none;
flex : 9;
`

const Button = styled.button`

flex:0.5;
background-color: teal;
color : white;
`



const NewsLetter = () => {
    return (
        <div>
            <Container>
                <Title>
                Haber Bülteni
                </Title>
                <Desc>
                    Emailinizi girerek en güncel kampanyalarımızdan anında haberdar olabilirsiniz.
                </Desc>
                <InputContainer>
                <Input placeholder = "email..." />
                <Button>
                <SendOutlined/>
                </Button>
                </InputContainer>
               
            </Container>
        </div>
    )
}

export default NewsLetter
