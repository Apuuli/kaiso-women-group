import React from "react"
import { menuLinks } from "../../../constants/menuLinks"
import { FooterLinkContainer, FooterLinkItem } from "./footerNav.elements"

const FooterNav = () => {
  return (
    <FooterLinkContainer>
      {menuLinks &&
        menuLinks.map(({ name, path }, index) => (
          <FooterLinkItem
            key={index}
            to={path}
            activeClassName="footer-active-link"
          >
            {name}
          </FooterLinkItem>
        ))}
    </FooterLinkContainer>
  )
}

export default FooterNav
