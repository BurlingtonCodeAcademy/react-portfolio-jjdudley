import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Spacer = styled.div`
width: 100%;
height: 100vh;
`

const DesignBackground = (): JSX.Element => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "lux-aeterna-spread-2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            <Spacer />
          <h2>gatsby-background-image</h2>
        </BackgroundImage>
      )
    }}
  />
)

const StyledDesignBackground = styled(DesignBackground)`
  
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  flex-direction: column;
`

export default StyledDesignBackground;