import React from "react"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout page="4">
      <SEO title="About" />
      <h1>About</h1>
      <Bio />
    </Layout>
  )
}

export default About
