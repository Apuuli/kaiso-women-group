import React from "react"
import { FooterBody, FooterContainer, FooterLogo } from "./footer.elements"
import Address from "./../address/index"
import FooterSocial from "./../footerSocial/index"
import FooterNav from "./../footerNav/index"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBody>
        <Address />
        <FooterSocial />
        <FooterNav />
      </FooterBody>
      <FooterLogo>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </FooterLogo>
    </FooterContainer>
  )
}

export default Footer
