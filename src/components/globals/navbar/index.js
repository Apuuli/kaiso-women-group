import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import NavbarIcons from "../socialIcons"
import NavLinks from "../links"
import { NavWrapper, HeaderWrapper, Brand, Burger } from "./navbar.element"

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleMenu = (state = true) => setOpen(state)

  return (
    <NavWrapper>
      <HeaderWrapper>
        <Brand to="/" onClick={toggleMenu}>
          <StaticImage
            src="../../../images/kwg-icon.png"
            width={70}
            alt="KWG logo"
          />
        </Brand>
        <Burger />
      </HeaderWrapper>
      <NavLinks toggleMenu={toggleMenu} />
      <NavbarIcons />
    </NavWrapper>
  )
}
export default Navbar
