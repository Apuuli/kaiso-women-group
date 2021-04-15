import React from "react"
import styled from "styled-components"

const Footer = ({ data }) => {
  return (
    <div>
      <KwgFooter>
        <p>
          © {new Date().getFullYear()}, {data.siteMetadata.title}
          {` `}
          <a
            href="https://www.facebook.com/benjamin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Benjamin At
          </a>
        </p>
      </KwgFooter>
    </div>
  )
}

export default Footer

export const KwgFooter = styled.footer`
  padding: 3rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.mediumGreen};
  color: ${({ theme }) => theme.colors.darkPurple};
  a {
    text-decoration: none;
    margin-left: 1rem;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`
