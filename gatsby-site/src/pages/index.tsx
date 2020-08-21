import React from "react"

import Layout from "../components/layout"
import Hero from '../components/Hero'
//import Desc from '../components/Desc'
import OpenSource from '../components/Open-Source'
import Design from '../components/Design'
import Connect from '../components/Connect'

import SEO from "../components/seo"

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <OpenSource />
    <Design />
    <Connect />
  </Layout>
);

export default IndexPage
