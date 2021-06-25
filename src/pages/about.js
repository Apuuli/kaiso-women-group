import React from "react"
import Layout from "./../components/layout"
import Seo from "./../components/Seo"
import Section from "./../components/section/index"
import Introduction from "./../components/introduction"
import Core from "./../components/core"
import Membership from "./../components/membership/index"
import Value from "./../components/Value/index"

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <Section title="Kaiso Women's Group (KWG)">
        <Introduction />
      </Section>
      <Section>
        <Core />
      </Section>
      <Section title="Core Values">
        <Value />
      </Section>
      <Section title="Membership">
        <Membership />
      </Section>
    </Layout>
  )
}

export default About
