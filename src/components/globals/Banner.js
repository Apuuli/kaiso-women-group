import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

export const Banner = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage)

  return <ImgBanner image={pluginImage}>{children}</ImgBanner>
}
export const ImgBanner = styled(BgImage)`
  display: grid;
  place-items: center;
  min-height: 100vh;
`
