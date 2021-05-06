import styled from "styled-components"

export const Welcome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  margin: 2.5vh 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const WelcomeText = styled.div`
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
export const WelcomeImage = styled.div`
  .welcome-image {
    border-radius: 0.2rem;
    border: 0.5rem solid #fff;
    overflow: hidden;
    box-shadow: 0.5rem 1rem 1.5rem ${({ theme }) => theme.colors.darkGreen};
  }
`
