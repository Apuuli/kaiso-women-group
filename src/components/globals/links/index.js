import React from "react"
import { menuLinks } from "./../../../constants/menuLinks"
import { LinkContainer, LinkItem } from "./links.elements"

function NavLinks() {
  return (
    <LinkContainer>
      {menuLinks &&
        menuLinks.map(({ name, path }, index) => (
          <LinkItem key={index} to={path} activeClassName="is-active">
            {name}
          </LinkItem>
        ))}
    </LinkContainer>
  )
}

export default NavLinks
