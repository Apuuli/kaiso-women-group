import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import styled from "styled-components"

const Activity = ({ item }) => {
  return (
    <Item>
      <Icon></Icon>
      <Detail>{item}</Detail>
    </Item>
  )
}

export default Activity

export const Item = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.12rem 0.24rem;
  padding: 0.12rem 0.24rem;
  font-size: 0.7rem;
`

export const Icon = styled(FaAngleDoubleRight)`
  display: inline-flex;
  align-items: center;
  margin-right: 0.3rem;
`
export const Detail = styled.div`
  display: inline-flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 0.1rem;
`
