import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ProfileImgThree from "../image-components/profile_image_three"
import Dribbble from "../image-components/dribbble"
import GitHub from "../image-components/github"
import LinkedIn from "../image-components/linkedin"
import { Sticky } from "react-sticky"
import { Link } from "gatsby"

const Heading = styled.div`
  position: relative;
  color: rgb(241, 241, 241);
  width: 100%;
  height: 100vh;
  background-color: rgb(245, 245, 245);
  background-color: rgb(231, 230, 220);
  background-color: rgb(241, 241, 241);
  background-color: black;
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 39, 146);
  background-color: white;
`

const TopHero = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
`

const HeroLeft = styled.div`
  display: flex;
  width: 47%;
  padding-left: 3%;
  line-height: 0.25rem;
`
const HeroRight = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 47%;
  padding-right: 3%;
  line-height: 0.25rem;
`

const Arrow = styled.div`
  width: 20px;
  height: 20px;
  border-right: solid 2px rgb(66, 73, 75);
  border-bottom: solid 2px rgb(66, 73, 75);
  transform: rotate(45deg);
  border-color: white;
`

const ImgContainer = styled.div`
  width: 52%;
  margin: 0;
  padding: 0;
`

const HeroCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const CenterCaption = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-start;
  z-index: 100;
  color: black;
  font-size: 2.5rem;
  font-size: 2.8rem;
  padding-top: 0%;
  padding-right: 25%;
  transition: opacity 2s;
  opacity: 1;
  --animate-delay: 5s;
`

const HeroBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: start;
  z-index: 5000;
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  height: 100%;
  padding-left: 2%;
  padding-bottom: 1%;
`
const GitHubContainer = styled.div`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
`

const DribbbleContainer = styled.div`
  width: 38px;
`

const LinkedInContainer = styled.div`
  width: 40px;
`


const Hero = () => {
  const [HeroOn, setHero] = useState(false)

  return (
    <Heading>
      <HeroContainer>
        <TopHero
          className={{
            display: `${HeroOn ? "animate__animated animate__fadeOut" : ""}`,
          }}
          data-sal="fade"
          data-sal-delay="1000"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <HeroLeft>
            <h1 id="name"></h1>
          </HeroLeft>
          <HeroRight id="hero_right">
            <Link class="hero_right_text" to="about">
              <h1>INFO</h1>
            </Link>
          </HeroRight>
        </TopHero>

        <HeroCenter
          className={{
            display: `${HeroOn ? "animate__animated animate__fadeOut" : ""}`,
          }}
        >
          <CenterCaption>
            <h1
              id="name2"
              data-sal="fade"
              data-sal-delay="1000"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              JOSH DUDLEY<br></br>FRONT END<br></br>DEVELOPER<br></br>/ /
              DESIGNER
            </h1>
          </CenterCaption>
          <div
            id="profile_img_container_three"
            data-sal="fade"
            data-sal-delay="200"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <ProfileImgThree />
          </div>
         
        </HeroCenter>

        <Sticky>
          {({ style }) => (
            <HeroBottom
              style={{ ...style, bottom: "0px", top: "unset", zIndex: 1000 }}
              data-sal="fade"
              data-sal-delay="1000"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <IconsContainer>
                <GitHubContainer>
                  <Link to="https://github.com/jjdudley">
                    <GitHub />
                  </Link>
                </GitHubContainer>
                <DribbbleContainer>
                  <Link to="https://dribbble.com/jjdudley">
                    <Dribbble />
                  </Link>
                </DribbbleContainer>
                <LinkedInContainer>
                  <Link to="https://www.linkedin.com/in/joshuajdudley/">
                    <LinkedIn />
                  </Link>
                </LinkedInContainer>
              </IconsContainer>
            </HeroBottom>
          )}
        </Sticky>
      </HeroContainer>
    </Heading>
  )
}

export default Hero
