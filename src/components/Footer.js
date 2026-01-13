import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/footer.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulNavigation {
        siteTitle
      }
    }
  `)

  const nav = data.contentfulNavigation

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} {nav.siteTitle}</p>
      </div>
    </footer>
  )
}

export default Footer