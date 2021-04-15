import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Banner } from "../components/globals/Banner"
import { Programs } from "./../components/Programs"
import HeaderOne from "../components/header/header"
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Banner>
      <div>
        <h2>
          We know who we are,<span>Women</span> of kaiso
        </h2>
        <p>W </p>
      </div>
    </Banner>
    <HeaderOne title="Programs" />
    <Programs />
  </Layout>
)

export default IndexPage
