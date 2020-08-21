import React from "react"
import styled from 'styled-components'
import LuxAeternaThree from '../image-components/lux_aeterna_three'
import { Link } from "gatsby"

const Projects = styled.div`
width: 100%;
height: 70vh;
background-color: rgb(22, 22, 22);
display: flex;
background-color: rgb(74, 40, 112);
background-color: white;
`

const ProjectsLeft = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 50%;
 height: 100%;
 padding-left: 10%;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    
`


const ProjectsRight = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
`

const ProjectsButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-content: center;
margin-top: 5%;
`

const ImgContainer = styled.div`
width: 500px;
`

const Design = (): JSX.Element => (
    <Projects
    
        >
        <ProjectsLeft>
            <TitleContainer>
                <h2 id='design'
                data-sal="fade"
                data-sal-delay="100"
                data-sal-duration="500"
                data-sal-easing="ease"
                >DESIGN</h2>
                <h3 id='design_caption'
                data-sal="fade"
                data-sal-delay="200"
                data-sal-duration="500"
                data-sal-easing="ease"
                >My skillset includes publication design, illustration, iconography, intuitive UI, wireframing and design systems.</h3>
            </TitleContainer>

            <ProjectsButtonContainer
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="500"
            data-sal-easing="ease">
                
                <Link id='view_projects' to="https://dribbble.com/jjdudley">View Projects</Link>
            </ProjectsButtonContainer>
        </ProjectsLeft>

        <ProjectsRight>
            <ImgContainer
            data-sal="fade"
            data-sal-delay="500"
            data-sal-duration="500"
            data-sal-easing="ease">
                <LuxAeternaThree />
            </ImgContainer>
        </ProjectsRight>

    </Projects>
)

export default Design