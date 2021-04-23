import React from "react"
import Seo from "../components/Seo"
import Layout from "./../components/layout"
import Section from "./../components/section/index"
import Contact from "./../components/contact/index"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <Section>
        <Contact />
      </Section>
    </Layout>
  )
}

export default contact
