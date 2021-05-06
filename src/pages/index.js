import React from "react"
import Layout from "./../components/layout"
import Seo from "./../components/Seo"
import Banner from "../components/banner"
import Section from "../components/section"
import Programs from "../components/programs"
import WelcomeSection from "./../components/WelcomeSection/index"

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
      <Section title="Welcome">
        <WelcomeSection />
      </Section>
      <Section title="Thematic programs">
        <Programs />
      </Section>
    </Layout>
  )
}
export default Index
