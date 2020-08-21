import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'
import styled from "styled-components";

const Image = styled(Img)`
    width: 100%;
    margin-left: 2%;
`;

const LuxAeternaTwo = (): JSX.Element => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "lux-aeterna-spread-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);
  
    return <Image fluid={data.placeholderImage.childImageSharp.fluid} />;
  };
  
  export default LuxAeternaTwo;