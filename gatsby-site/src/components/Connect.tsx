import React from "react"
import styled from 'styled-components'

const Footer = styled.div`
background-color: rgb(219, 219, 219);
width: 100%;
display: flex;
flex-direction: column;
text-align: center;
height: 30vh;
padding-top: 6%;
`


const Connect = (): JSX.Element => (
    <Footer>
        <h2>Say hello <span role="img" aria-label="wave">👋</span></h2>
        <p>For inquiries (or to just say hi): <strong>joshdudley.vt@gmail.com</strong></p>
        
    </Footer>
)

export default Connect