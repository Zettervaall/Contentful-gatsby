import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../styles/navbar.css"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulNavigation {
        siteTitle
        navigationItems
      }
    }
  `)

  const nav = data.contentfulNavigation

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Site Title till vänster */}
        <Link to="/" className="navbar-logo">
          {nav.siteTitle}
        </Link>

        {/* Navigation Links till höger */}
        <div className="navbar-links">
          {nav.navigationItems.map((item) => {
            let path = "/"
            const itemLower = item.toLowerCase()
            
            if (itemLower === "home") path = "/"
            else if (itemLower === "projects") path = "/projects"
            else if (itemLower === "about") path = "/about"
            else if (itemLower === "contact") path = "/contact"
            
            return (
              <Link
                key={item}
                to={path}
                className="navbar-link"
                activeClassName="navbar-link-active"
              >
                {item}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar