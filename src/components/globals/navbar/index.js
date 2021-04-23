import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import NavbarIcons from "../socialIcons"
import NavLinks from "../links"
import { NavWrapper, HeaderWrapper, Brand, Burger } from "./navbar.element"

function Navbar({ toggleMenu }) {
  return (
    <NavWrapper>
      <HeaderWrapper>
        <Brand to="/">
          <StaticImage
            src="../../../images/kwg-icon.png"
            placeholder="tracedSVG"
            width={60}
            imgClassName="logo-image"
            alt="KWG logo"
          />
        </Brand>
        <Burger onClick={toggleMenu} />
      </HeaderWrapper>
      <NavLinks />
      <NavbarIcons />
    </NavWrapper>
  )
}
export default Navbar
