import styled from "styled-components"

export const StyledHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: capitalize;
  margin: 0 1.5rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.darkPurple};
  @media (min-widith: 768px) {
    font-size: 1rem;
    font-weight: 700;
  }
`
