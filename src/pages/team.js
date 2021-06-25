import React from "react"
import Seo from "./../components/Seo"
import Layout from "./../components/layout"
import Section from "../components/section"
import MemberList from "./../components/memberList/index"

const Team = () => {
  return (
    <Layout>
      <Seo title="Our Team" />
      <Section title="Our Family">
        We are composure of women with diverse personalities, and we are ever
        open for new
        <span style={{ color: "green", fontWeight: "bold" }}> talents </span>
        that habour similar interests and would wish to associate / patner with
        us to create value for betterment of our communities. well, if we share
        concern it, submit your interse
      </Section>
      <Section title="Board of Directors">
        <MemberList />
      </Section>
      <Section title="Our staff">
        <MemberList />
      </Section>
    </Layout>
  )
}

export default Team
