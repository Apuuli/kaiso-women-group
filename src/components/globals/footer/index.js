import React from "react"
import { FooterBody, FooterContainer, FooterLogo } from "./footer.elements"
import Address from "./../address/index"
import FooterSocial from "./../footerSocial/index"
import FooterNav from "./../footerNav/index"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBody>
        <Address />
        <FooterSocial />
        <FooterNav />
      </FooterBody>
      <FooterLogo>
        <span>
          © {new Date().getFullYear()},{" "}
          <Link to="/">KWG:Kaiso Women's Group</Link>
        </span>
      </FooterLogo>
    </FooterContainer>
  )
}

export default Footer
