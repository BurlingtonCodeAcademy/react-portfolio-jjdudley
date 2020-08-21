/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styled from 'styled-components';
import Header from './header';
import { StickyContainer } from 'react-sticky';

import "./layout.css";

const Container = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
`;

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
   
    <Header />
      <Container>
      <StickyContainer>
        <main>{children}</main>
        </StickyContainer>
      </Container>
     
    </>
  )
};

export default Layout
