import React, { useState } from "react"
import styled from "styled-components"
import NavbarIcons from "./NavbarIcons"
import logo from "../../../images/kwg-icon.png"
import NavLinks from "./NavbarLinks"
import { FaAlignJustify } from "react-icons/fa"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleMenu = (state = true) => setOpen(state)

  return (
    <NavWrapper>
      <HeaderWrapper>
        <Brand to="/" onClick={() => toggleMenu()}>
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
const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  width: 90vw;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Brand = styled(Link)`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`
export const Burger = styled(FaAlignJustify)`
  display: flex;
  font-size: 3rem;
  padding: 0.5rem;
  background: #e0e0e0;
  @media (min-width: 768px) {
    display: none;
  }
`
