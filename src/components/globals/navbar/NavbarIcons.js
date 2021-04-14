import React from "react"
import styled from "styled-components"
import socialIcons from "../../../constants/socialIcons"

function NavbarIcons() {
  return (
    <SocialMenu>
      {socialIcons &&
        socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
    </SocialMenu>
  )
}

export default NavbarIcons

export const SocialMenu = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${({ theme }) => theme.transitionFunction}
  }
  .icon:hover {
    color: ${({ theme }) => theme.colors.mainGray};
  }
  .fab {
    color: #3b579d;
  }
  .fat {
    color: #3ab7f0;
  }
  .fai {
    color: #d45f53;
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
