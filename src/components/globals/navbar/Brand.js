import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

function Brand({ toggleMenu }) {
  return (
    <HeaderWrapper>
      <BrandLogo to="/">Kwg</BrandLogo>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => toggleMenu()}
      ></FaAlignRight>
    </HeaderWrapper>
  )
}
export default Brand

export const BrandLogo = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;
  font-size: 2rem;
  ${({ theme }) => theme.letterSpacing}
`

export const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    cursor: pointer;
    font-size: 1.75rem;
    color: purple;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
