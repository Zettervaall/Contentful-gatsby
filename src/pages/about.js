import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/about.css"

const AboutPage = ({ data }) => {
  const aboutPage = data.contentfulPage

  return (
     <>
    <Navbar />
    <div className="about-container">
      <h1 className="about-title">{aboutPage.title}</h1>

      <div className="about-content">
        <p>{aboutPage.content?.content}</p>
      </div>

      <div className="about-skills">
        <div className="skill-card">
          <h3>3D Visualization</h3>
          <p>Several years of experience</p>
        </div>
        <div className="skill-card">
          <h3>VR Development</h3>
          <p>Certified VR Developer</p>
        </div>
        <div className="skill-card">
          <h3>Frontend Dev</h3>
          <p>Focus on UX/UI</p>
        </div>
      </div>
    </div>
        <Footer />
    </>
  )
}

export const query = graphql`
  {
    contentfulPage(slug: {eq: "about"}) {
      title
      content {
        content
      }
    }
  }
`

export default AboutPage