import styled from "styled-components"

export const StyledHeader = styled.h2`
  text-align: center;
  font-size: 5rem;
  align-items: center;
  font-weight: 900;
  text-transform: capitalize;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.slatedtext};
  color: ${({ theme }) => theme.colors.mediumPurple};
  ${({ theme }) => theme.transitionDefault}
  @media (min-widith: 768px) {
    font-size: 1rem;
    font-weight: 700;
  }
`
