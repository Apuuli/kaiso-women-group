import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ValueBox } from "./corevalues.elements"
const CoreValues = () => {
  const data = useStaticQuery(graphql`
    {
      allCoreValuesJson {
        nodes {
          context
          value
        }
      }
    }
  `)

  const {
    allCoreValuesJson: { nodes: values },
  } = data
  return values.map(({ context, value }, index) => (
    <ValueBox key={index}>
      <h2>{value}</h2>
      <p>{context}</p>
    </ValueBox>
  ))
}
export default CoreValues
