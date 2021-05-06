import styled from "styled-components"

export const BackgroundText = styled.div`
  text-align: justify;
  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 0.2rem solid transparent;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.mediumPurple};
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.mediumPurple};
    }
  }
`
