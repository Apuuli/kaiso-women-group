import * as React from "react"
import KwgSection from "../components/kwgSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/globals/Banner"
import { Programs } from "./../components/Programs"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Banner>
      <div>
        <h2>
          We know who we are,<span>Women</span> of kaiso
        </h2>
        <p>W </p>
      </div>
    </Banner>
    <Programs />
  </Layout>
)

export default IndexPage
