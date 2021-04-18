import React from "react"
import { socialIcons } from "./../../../constants/socialIcons"
import {
  FooterSocialContainer,
  FooterSocialItem,
} from "./footerSocial.elements"

const FooterSocial = () => {
  return (
    <FooterSocialContainer>
      {socialIcons &&
        socialIcons.map(({ icon, name, url }, index) => (
          <FooterSocialItem key={index} href={url} rel="noopener noreferrer">
            {icon}
            <span>{name}</span>
          </FooterSocialItem>
        ))}
    </FooterSocialContainer>
  )
}

export default FooterSocial
