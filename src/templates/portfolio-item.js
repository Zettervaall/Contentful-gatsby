import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/portfolio-item.css"

const PortfolioItemTemplate = ({ data }) => {
  const project = data.contentfulPortfolioItem
  const mainImage = project.images ? getImage(project.images) : null
  const videoUrl = project.video?.file?.url

  return (
    <>
      <Navbar />
      
      <div className="portfolio-item-container">
        <Link to="/projects" className="portfolio-back-link">
          ← Back to Projects
        </Link>
        
        <h1 className="portfolio-title">{project.title}</h1>

        <span className={`portfolio-category-badge`}>
          {project.category}
        </span>
        
        {/* Huvudbild eller Video */}
        {videoUrl ? (
          <div className="portfolio-media-wrapper">
            <video 
              controls
              autoPlay 
              loop 
              muted 
              playsInline
              className="portfolio-video"
            >
              <source src={`https:${videoUrl}`} type="video/mp4" />
            </video>
          </div>
        ) : mainImage ? (
          <div className="portfolio-media-wrapper">
            <GatsbyImage image={mainImage} alt={project.title} />
          </div>
        ) : null}
        
        {/* Beskrivning */}
        <div className="portfolio-description">
          <h2>About this project</h2>
          <p>{project.description?.description}</p>
        </div>

        {/* Gallery Images */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="portfolio-gallery">
            <h2 className="portfolio-gallery-title">Project Gallery</h2>
            <div className="portfolio-gallery-grid">
              {project.galleryImages.map((img, index) => {
                const galleryImage = getImage(img)
                return galleryImage ? (
                  <div key={index} className="portfolio-gallery-item">
                    <GatsbyImage 
                      image={galleryImage} 
                      alt={`${project.title} - Image ${index + 1}`}
                    />
                  </div>
                ) : null
              })}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  )
}

// GraphQL query
export const query = graphql`
  query($slug: String!) {
    contentfulPortfolioItem(slug: {eq: $slug}) {
      title
      slug
      category
      description {
        description
      }
      images {
        gatsbyImageData(width: 1200, quality: 90)
        title
      }
      video {
        file {
          url
        }
      }
      galleryImages {
        gatsbyImageData(width: 800, quality: 90)
        title
      }
    }
  }
`

export default PortfolioItemTemplate