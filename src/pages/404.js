import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/404.css"

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-title">404</h1>
          <h2 className="error-subtitle">oops! Page Not Found</h2>
          <Link to="/" className="error-button">
            Back to homepage
          </Link>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default NotFoundPage