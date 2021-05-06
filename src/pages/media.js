import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import Seo from "../components/Seo"
import Layout from "./../components/layout"
import Section from "../components/section"
import { graphql } from "gatsby"

const Media = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  return (
    <Layout>
      <Seo title="Our Media" />
      <Section title="Our photography">
        <p> We believe images can equally communicate.</p>
        <Gallery images={images} lightboxOptions={lightboxOptions} />
      </Section>
    </Layout>
  )
}

const lightboxOptions = {
  imageLoadErrorMessage: "Impossible de charger cette image",
  nextLabel: "Image suivante",
  prevLabel: "Image précédente",
  zoomInLabel: "Zoomer",
  zoomOutLabel: "Dézoomer",
  closeLabel: "Fermer",
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: TRACED_SVG
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default Media
