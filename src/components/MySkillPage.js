import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Design, Develope } from '../subComponents/AllSvgs'
import { lightTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import PowerButton from '../subComponents/PowerButton'
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding-left: 5%;
   padding-top: 30%;
   
   
  }


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
@media (max-width: 768px) {
    
    width: 50vw;
   
  }
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Designer
</Title>
<Description>
Web Developer | YouTuber | Professional Video Editor | 3D Video Editor 
</Description>
<Description>
<strong>I like to Design</strong>
<ul>
    <li>
        Web Design
    </li>
    <li>
        Mobile Apps
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       PhotoShop
    </li>
    
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend Developer
</Title>
<Description>
Really in Love with Animated things.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Redux, Bootstrap, Tailwind, Firebase ,C++, Python, Java
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, etc.
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
