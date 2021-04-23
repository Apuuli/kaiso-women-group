import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaEnvelopeOpenText,
  FaFacebookMessenger,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa"
import {
  ContactsHandleSection,
  HandleSection,
  HandleHeader,
  HandleTwitter,
  HandleEmail,
  HandleFacebook,
  HandlePhone,
  HandleBody,
} from "./ContactsHandleSection.elements"

const ContactHandles = () => {
  const data = useStaticQuery(graphql`
    {
      allContactsJson {
        edges {
          node {
            handle
            email
            facebook
            phone
            twitter
          }
        }
      }
    }
  `)

  const { allContactsJson } = data
  console.log(allContactsJson)
  return (
    <ContactsHandleSection>
      {" "}
      {allContactsJson.edges &&
        allContactsJson.edges.map(
          ({ node: { handle, phone, email, twitter, facebook } }, index) => (
            <HandleSection key={index}>
              <HandleHeader>{handle}</HandleHeader>
              <HandleBody>
                <HandleEmail>
                  <FaEnvelopeOpenText />
                  <a href={email ? `mailto:${email}` : ""}>{email}</a>
                </HandleEmail>
                <HandlePhone>
                  <FaPhoneAlt />
                  <a href={phone ? `tel:${phone}` : ""}>{phone}</a>
                </HandlePhone>
                {facebook && (
                  <HandleFacebook>
                    <FaFacebookMessenger />
                    <a
                      href={facebook ? `https://facebook.com/${facebook}` : ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{facebook}
                    </a>
                  </HandleFacebook>
                )}
                {twitter && (
                  <HandleTwitter>
                    <FaTwitter />
                    <a
                      href={twitter ? `https://twitter.com/@${twitter}` : ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{twitter}
                    </a>
                  </HandleTwitter>
                )}
              </HandleBody>
            </HandleSection>
          )
        )}
    </ContactsHandleSection>
  )
}

export default ContactHandles
