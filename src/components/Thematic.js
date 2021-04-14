import React from "react"
import styled from "styled-components"

const Thematic = ({ title, children }) => {
  return (
    <Them>
      <ThemTitle>{title}</ThemTitle>

      <ThemBody>{children}</ThemBody>
    </Them>
  )
}

export default Thematic

export const Them = styled.div`
  height: 10rem;
  border-radius: 0.2rem;
  margin: 0rem 0.4rem;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
export const ThemTitle = styled.h2`
  text-transform: capitalize;
  text-decoration: underline;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 900;
  font-family: ${({ theme }) => theme.fonts.slatedtext};
`
export const ThemBody = styled.div`
  width: 100%;
  border-top: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.mediumGreen};
  padding: 0.2rem 0rem;
`
