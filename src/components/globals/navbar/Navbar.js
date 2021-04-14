import React, { useState } from "react"
import styled from "styled-components"
import MenuLinks from "./MenuLinks"
import Brand from "./Brand"
import { FaAlignRight, FaWindowClose } from "react-icons/fa"
import { Link } from "gatsby"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <NavWrapper>
      <NavBrand>
        <BrandLogo to="/">Kwg</BrandLogo>

        <FaAlignRight className="toggle-icon" onClick={() => setMenu(!menu)} />
      </NavBrand>
      {/* <MenuLinks open={menu} /> */}
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
