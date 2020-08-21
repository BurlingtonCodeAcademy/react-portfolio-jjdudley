import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'
import styled from "styled-components";

const Image = styled(Img)`
    width: 30px;
    transform: rotate(90deg);
    margin-bottom: 40px;
`;

const Arrow = (): JSX.Element => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "arrow.png" }) {
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
  
  export default Arrow;