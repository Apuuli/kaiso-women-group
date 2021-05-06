import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ContactHandles from "../ContactHandles"
import { ContactSection, ContactText, ContactBody } from "./contact.elements"

const Contact = () => {
  return (
    <ContactSection>
      <ContactText>
        <ContactBody>
          <h2>Electronic Address</h2>
          <ContactHandles />
        </ContactBody>
        <StaticImage
          alt="Direction to our offices"
          src="./../../images/treePlanting.png"
          placeholder="tracedSVG"
          className="contact-image"
        />
      </ContactText>
    </ContactSection>
  )
}

export default Contact
