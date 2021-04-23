import React from "react"
import Layout from "./../components/layout"
import Seo from "./../components/Seo"
import Banner from "../components/banner"
import Section from "../components/section"
import Programs from "../components/programs"

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
      <Section title="About us">
        <div>We are home</div>
      </Section>
      <Programs />
    </Layout>
  )
}
export default Index
