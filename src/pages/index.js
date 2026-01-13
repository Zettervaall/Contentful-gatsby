import React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/home.css"

const HomePage = ({ data }) => {
  const homePage = data.contentfulPage
  const videoUrl = homePage.video?.file?.url

  return (
    <>
    <Navbar />
    
    <div className="home-container">


      <div className="home-content">
        <h1 className="home-title">Portfolio</h1>
        
        {homePage.content && (
          <p className="home-text">
            {homePage.content.content}
          </p>
        )}

              {videoUrl && (
        <div className="home-video-wrapper">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="home-video"
          >
            <source src={`https:${videoUrl}`} type="video/mp4" />
          </video>
        </div>
      )}

        <Link to="/projects" className="home-cta-button">
          View My Work →
        </Link>
      </div>
    </div>
    <Footer />
    </>
  )
}

export const query = graphql`
  {
    contentfulPage(slug: {eq: "home"}) {
      title
      content {
        content
      }
      video {
        file {
          url
        }
      }
    }
  }
`

export default HomePage