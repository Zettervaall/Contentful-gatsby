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
          <p>Made with Unreal Engine, 3Ds Max, V-Ray and After Effects</p>
        </div>
      )}

        <Link to="/projects" className="home-cta-button">
          View my work
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