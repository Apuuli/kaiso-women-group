import React from "react"
import { menuLinks } from "../../../constants/menuLinks"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinks = () => {
  const navlinks = menuLinks.map((link, index) => (
    <menuItem to={link.path} key={index}>
      <menuLink> {link.name}</menuLink>
    </menuItem>
  ))
  return navlinks
}

const menuItem = styled(Link)`
  padding: 0.5erm 1rem;
  text-decoration: none;
  font-weight: 400;
`
const menuLink = styled.a`
  text-transform: uppercase;
`
export default NavLinks
