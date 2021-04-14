import React, { useState } from "react"
import styled from "styled-components"
import MenuLinks from "./MenuLinks"
import Brand from "./Brand"
import { Link } from "gatsby"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <NavWrapper>
      <Brand toggleMenu={toggleMenu}></Brand>
      <MenuLinks open={isOpen} />
    </NavWrapper>
  )
}

export default Navbar

const NavWrapper = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`
export const NavBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BrandLogo = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;
  font-size: 3rem;
  ${({ theme }) => theme.letterSpacing}
`
