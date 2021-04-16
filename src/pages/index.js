import React from "react"
import Layout from "./../components/layout"
import Seo from "./../components/Seo"
import { StaticImage } from "gatsby-plugin-image"

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <section>
        <StaticImage
          src="../images/banner.png"
          alt="Kaiso women dance group Singing"
          as="section"
        />
      </section>
    </Layout>
  )
}
export default Index
