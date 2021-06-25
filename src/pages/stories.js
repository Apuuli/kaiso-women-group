import React from "react"
import Layout from "./../components/layout"
import Section from "./../components/section/index"
import Seo from "./../components/Seo"

const stories = () => {
  return (
    <Layout>
      <Seo title="Our Stories" />
      <Section title="Stories / News">
        <p>
          Like elsewhere's of Life, we always wanna carry with us some that we
          they might not be that unique.{" "}
        </p>
      </Section>
    </Layout>
  )
}

export default stories
