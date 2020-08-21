import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Arrow from '../image-components/arrow'
import ProfileImgOne from '../image-components/profile_image_one'



const OpenSourceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
margin-top: 30px;
margin-left: 40px;
`

const SkillsContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 400px;
`

const FrontEnd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    color: black;
`
const FrontEndTools = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-between;
`


const BottomTools = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
color: black;
`

const BackEnd = styled.div`
display: flex;
flex-direction: column;
`

const Tools = styled.div`
    display: flex;
    flex-direction: column;
`
const ProfileContainer = styled.div`
display: flex;
height: 630px;
`

const ProfileLeft = styled.div`
display: flex;
flex-direction: column;

`

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 120px;
`


const SecondPage = () => (
  <Layout>
    
        <SEO title="Page two" />
          <ProfileContainer>
            <ProfileLeft>
            <OpenSourceContainer>
                <Link to="/"><Arrow/></Link> 
                <h2 id='open_source'>Hello 👋</h2>
                <h3 id='open_source_caption'>A visual and conceptual communicator at heart, I have found web development to be an incredible medium for using art and design,
                logic, and creative problem-solving to convey ideas with equal parts beauty, form, and function. Currently based in Vermont.</h3>
                <SkillsContainer id='tools_container'>

                    <FrontEnd>
                        <h3>Front End</h3>
                        <FrontEndTools>
                            <ul>
                                <li>JavaScript ES6/ES2015</li>
                                <li>React.js</li>
                                <li>CSS3</li>
                                <li>Leaflet</li>
                            </ul>
                            <ul>
                                <li>Gatsby.js</li>
                                <li>TypeScript</li>
                                <li>Firebase SDK</li>
                                <li>HTML5</li>
                            </ul>
                        </FrontEndTools>
                    </FrontEnd>

                    <BottomTools>
                        <BackEnd>
                            <h3>Back End</h3>
                                <ul>
                                    <li>Express.js</li>
                                    <li>MongoDB</li>
                                    <li>Node.js</li>
                                </ul>
                        </BackEnd>
                        <Tools>
                            <h3>Design Tools</h3>
                                <ul>
                                    <li>Figma</li>
                                    <li>Adobe Creative Suite</li>
                                </ul>
                        </Tools>
                    </BottomTools>
                </SkillsContainer>
            </OpenSourceContainer>
           

            </ProfileLeft>
            <ProfileRight>
                <ProfileImgOne/>
            </ProfileRight>

          </ProfileContainer>
            
        
  </Layout>
)

export default SecondPage





