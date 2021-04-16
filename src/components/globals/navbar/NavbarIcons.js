import React from "react"
import styled from "styled-components"
import { socialIcons } from "./../../../constants/socialIcons"

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
export const IconContainer = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Icon = styled.a`
  color: inherit;
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  margin: 0.25rem 0.5rem;
  transition: all 0.4s ease-in-out;
  &:hover {
    .facebook {
      color: blue;
    }
    .youtube {
      color: red;
    }
    .intagram {
      color: red;
    }
    .whatsapp {
      color: green;
    }
    .twitter {
      color: blue;
    }
  }
`
