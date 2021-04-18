import React from "react"
import { socialIcons } from "./../../../constants/socialIcons"
import { Icon, IconContainer } from "./socialIcons.elements"

function NavbarIcons() {
  return (
    <IconContainer>
      {socialIcons &&
        socialIcons.map(({ icon, url }, index) => (
          <Icon
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            {icon}
          </Icon>
        ))}
    </IconContainer>
  )
}

export default NavbarIcons
