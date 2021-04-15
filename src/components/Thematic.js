import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Thematic = ({ title, image, children }) => {
  return (
    <Them>
      <StaticImage
        src="../images/craftsMaking.png"
        placeholder="blurred"
        alt={title}
      ></StaticImage>
      <ThemTitle>{title}</ThemTitle>

      <ThemBody>{children}</ThemBody>
    </Them>
  )
}

export default Thematic

export const Them = styled.div`
  border-radius: 0.2rem;
  margin: 0rem 0.4rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
export const ThemTitle = styled.h2`
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 900;
`
export const ThemBody = styled.div`
  width: 100%;
  border-top: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.mediumGreen};
  padding: 0.2rem 0rem;
`
