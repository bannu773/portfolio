import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'


const Logo = styled.h1`

display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Arial, Helvetica, sans-serif',cursive;

position: fixed;
margin-top: 1%;
left: 2rem;
top:2rem;
z-index:3 ;

`

const LogoComponents = (props) => {
  return (
    <Logo color={props.theme}>
        BH
    </Logo>
  )
}

export default LogoComponents