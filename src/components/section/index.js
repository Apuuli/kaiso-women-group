import React from "react"
import { PropTypes } from "prop-types"

import {
  SectionContainer,
  SectionHeader,
  SectionBody,
} from "./section.elements"

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionHeader> {title}</SectionHeader>
      <SectionBody> {children}</SectionBody>
    </SectionContainer>
  )
}

Section.defaultProp = {
  title: ``,
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Section
