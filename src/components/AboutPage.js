import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import { DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import PowerButton from '../subComponents/PowerButton'

import astronaut from '../assets/Images/spaceman.png'



const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;

`
const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}

`



const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease-in-out infinite;
img{
  width: 100%;
  height: auto;
}

`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 1;
line-height: 2;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family : Georgia, 'Times New Roman', Times, serif, Geneva, Tahoma, sans-serif;
font-style:italic;

`


const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

    <LogoComponent theme='dark'/>
    <SocialIcons theme='dark'/>
    <PowerButton />
    <ParticleComponent theme='dark' />
      <Spaceman>
        <img src={astronaut} alt="spaceman" />
      </Spaceman>
      <Main>
      I'm a third-year graduate of computer science and engineering.
      <br />
I love making new connections to learn new things.
<br /> <br />
 I launched a YouTube channel in December 2020 and now has over 20,000 viewings.
<br />
I began learning video editing in November 2020, which provides more insight into the company.
<br /> <br />
I have learning about blender which is about 3D editing and designing
<br />
l enjoy the challenges that enable me to grow.
      </Main>
</Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
