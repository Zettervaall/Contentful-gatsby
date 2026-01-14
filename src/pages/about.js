import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image" 
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/about.css"

const AboutPage = ({ data }) => {
  const aboutPage = data.contentfulPage
  const image = aboutPage.image ? getImage(aboutPage.image) : null

  return (
     <>
    <Navbar />
    <div className="about-container">
      <h1 className="about-title">{aboutPage.title}</h1>
 {image && (
          <div className="about-image-wrapper">
            <GatsbyImage 
              image={image} 
              alt={aboutPage.title}
              className="about-image"
            />
          </div>
        )}
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
       image {
        gatsbyImageData(width: 800, quality: 90)
        title
      }
      content {
        content
      }
    }
  }
`

export default AboutPage