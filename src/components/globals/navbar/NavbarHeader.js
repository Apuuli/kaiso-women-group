import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

function NavbarHeader({ toggleMenu }) {
  return (
    <HeaderWrapper>
      <Link to="/">
        <StaticImage
          src="../../../images/kwg-icon.png"
          width={50}
        ></StaticImage>
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => toggleMenu()}
      ></FaAlignRight>
    </HeaderWrapper>
  )
}

export default NavbarHeader

const HeaderWrapper = styled.div`
  padding: 0.4rem calc(100vw-1300px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    font-size: 1.75rem;
    cursor: pointer;
    color: purple;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
