import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/contact.css"

const ContactPage = ({ data }) => {
  const contactPage = data.contentfulPage
  
  let socials = {}
  if (contactPage.socials?.internal?.content) {
    try {
      socials = JSON.parse(contactPage.socials.internal.content)
    } catch (e) {
      console.error("Error parsing socials:", e)
    }
  }

  return (
     <>
    <Navbar />
    <div className="contact-container">
      <h1 className="contact-title">{contactPage.title}</h1>

      {contactPage.content && (
        <p className="contact-text">
          {contactPage.content.content}
        </p>
      )}

      {contactPage.mail && (
        <div className="contact-email-box">
          <h2>Email</h2>
          <a 
            href={`mailto:${contactPage.mail}`}
            className="contact-email-link"
          >
            {contactPage.mail}
          </a>
        </div>
      )}

      {Object.keys(socials).length > 0 && (
        <div className="contact-socials">
          <h2>Connect with me</h2>
          <div className="contact-socials-links">
          
            {socials.linkedin && (
              <a 
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-linkedin"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      )}
    </div>
        <Footer />
    </>
  )
}

export const query = graphql`
  {
    contentfulPage(slug: {eq: "contact"}) {
      title
      content {
        content
      }
      mail
      socials {
        internal {
          content
        }
      }
    }
  }
`

export default ContactPage