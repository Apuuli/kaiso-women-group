import React from "react"
import { FaEnvelopeOpen, FaTwitter, FaMobile } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import {
  AddressContainer,
  AddressHeader,
  AddressBody,
} from "./address.elements"

const Address = () => {
  const data = useStaticQuery(graphql`
    {
      KWG: allSite {
        nodes {
          siteMetadata {
            address {
              country
              district
              parish
              road
              subcounty
              village
            }
            email
            telephone
            title
            twitterHandle
          }
        }
      }
    }
  `)
  const {
    KWG: { nodes },
  } = data

  const siteInfo = nodes[0].siteMetadata
  return (
    <AddressContainer>
      <AddressHeader>Office Address</AddressHeader>
      <AddressBody>
        <h4>{siteInfo.title}</h4>
        <p>
          {siteInfo.address.country}, {siteInfo.address.district} District
        </p>
        <p>
          {siteInfo.address.subcounty} Sub County, {siteInfo.address.parish}{" "}
          Parish
        </p>
        <p>{siteInfo.address.village},</p>
        <p>{siteInfo.address.road}.</p>
        <hr />
        <p>
          <FaEnvelopeOpen />
          <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>,
        </p>
        <p>
          <FaMobile />
          <a href={`tel:${siteInfo.telephone}`}>{siteInfo.telephone}</a>,
        </p>
        <p>
          <FaTwitter />
          <a href={`https://twitter.com/${siteInfo.twitterHandle}`}>
            {siteInfo.twitterHandle}
          </a>
        </p>
      </AddressBody>
    </AddressContainer>
  )
}

export default Address
