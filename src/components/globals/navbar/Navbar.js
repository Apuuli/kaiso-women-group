import React, { useState } from "react"
import styled from "styled-components"
import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavLinks from "./NavbarLinks"

function Navbar() {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <NavWrapper>
      <NavbarHeader menu={menu} toggleMenu={toggleMenu} />
      <NavLinks />
      <NavbarIcons />
    </NavWrapper>
  )
}
const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
  }
`
export default Navbar
