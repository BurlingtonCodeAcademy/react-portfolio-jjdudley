import React from "react"
import styled from "styled-components"
import Mountain from "../image-components/mountain"

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background-color: white;
  background: rgb(231, 109, 25);
  background: linear-gradient(
    90deg,
    rgba(231, 109, 25, 1) 0%,
    rgba(194, 84, 84, 1) 51%,
    rgba(158, 94, 117, 1) 64%,
    rgba(121, 103, 150, 1) 77%,
    rgba(58, 165, 189, 1) 89%,
    rgba(0, 222, 224, 1) 100%
  );
  background: white;
`

const MountainImgContainer = styled.div`
  width: 175px;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
`

const Desc = (): JSX.Element => (
  <DescContainer>
    <div
      id="subcaption_container"
      data-sal="fade"
      data-sal-delay="200"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <h2 id="web_dev">FRONT END DEVELOPER / DESIGNER</h2>
      <div id="hero_subcaption_text_container">
        <h3 id="hero_subcaption_text">
          I'm a multidisciplinary creative bridging tech, form, and function.
          Currently based in Vermont.
        </h3>
      </div>
      <MountainImgContainer>
        <Mountain />
      </MountainImgContainer>
    </div>
  </DescContainer>
)

export default Desc
