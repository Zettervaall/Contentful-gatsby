import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/projects.css"

const ProjectsPage = ({ data }) => {
  const allProjects = data.allContentfulPortfolioItem.nodes
  
  const visualizations = allProjects.filter(p => p.category === "Visualization")
  const frontendProjects = allProjects.filter(p => p.category === "Frontend")
  const vrProjects = allProjects.filter(p => p.category === "VR")

  const ProjectCard = ({ item }) => {
    const image = item.images ? getImage(item.images) : null
    const videoUrl = item.video?.file?.url
    
    return (
  
      <Link to={`/portfolio/${item.slug}`} className="project-card">
        {videoUrl ? (
          <div className="project-video-wrapper">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="project-video"
            >
              <source src={`https:${videoUrl}`} type="video/mp4" />
            </video>

          </div>
        ) : image ? (
          <GatsbyImage 
            image={image} 
            alt={item.title}
            className="project-media"
          />
        ) : (
          <div className="no-media-placeholder">No media</div>
        )}
        
        <div className="project-info">
          <h3 className="project-title">{item.title}</h3>
        </div>
      </Link>
    )
  }

  return (
        <>
    <Navbar />
    <div className="projects-container">

      <section className="projects-section">
        <h2 className="projects-section-title">
          Visualizations
        </h2>
        <div className="projects-grid">
          {visualizations.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="projects-section-title">
          Frontend
        </h2>
        <div className="projects-grid-frontend">
          {frontendProjects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        
        </div>
      </section>

      <section className="projects-section">
        <h2 className="projects-section-title">
          VR
        </h2>
        <div className="projects-grid-vr">
          {vrProjects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
        <Footer />
    </>
  )
}

export const query = graphql`
  {
    allContentfulPortfolioItem {
      nodes {
        id
        title
        slug
        category
        images {
          gatsbyImageData(width: 800, quality: 90)
          title
        }
        video {
          file {
            url
          }
        }
           description {
          description
        }
      }
    }
  }
`

export default ProjectsPage