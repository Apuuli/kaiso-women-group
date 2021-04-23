import React from "react"
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
      <AddressHeader> {siteInfo.title}</AddressHeader>
      <AddressBody>
        <p>
          {siteInfo.address.country}, {siteInfo.address.district} District
        </p>
        <p>
          {siteInfo.address.subcounty} Sub County, {siteInfo.address.parish}{" "}
          Parish
        </p>
        <p>
          {siteInfo.address.village}, {siteInfo.address.road}
        </p>
        <p>
          {siteInfo.email}, {siteInfo.telephone}, {siteInfo.twitterHandle}
        </p>
      </AddressBody>
    </AddressContainer>
  )
}

export default Address
