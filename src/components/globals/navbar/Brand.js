import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

function Brand({ toggleMenu }) {
  return (
    <HeaderWrapper>
      <BrandLogo to="/">Kwg</BrandLogo>
      <Burger className="toggle-icon" onClick={() => toggleMenu()}></Burger>
    </HeaderWrapper>
  )
}
export default Brand

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
export const Burger = styled(FaAlignRight)`
  cursor: pointer;
  font-size: 1.75rem;
  color: purple;
`
export const BrandLogo = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;
  margin-right: auto;
  font-size: 2rem;
  ${({ theme }) => theme.letterSpacing}
`
