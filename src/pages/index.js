import * as React from "react"
import KwgSection from "../components/kwgSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/globals/Banner"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Banner>Home</Banner>
  </Layout>
)

export default IndexPage
