import styled from "styled-components"

export const Cores = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 1vh 0;
  padding: 1vh 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Vision = styled.div`
  h2 {
    text-align: center;
  }
  padding-bottom: 2.5vh;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.25rem;
  &:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
    box-shadow: 0.5rem 1rem 1.5rem ${({ theme }) => theme.colors.darkGreen};
  }
`
export const Mission = styled.div`
  h2 {
    text-align: center;
  }
  padding-bottom: 2.5vh;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.25rem;
  &:hover {
    background: ${({ theme }) => theme.colors.lightPurple};
    box-shadow: 0.5rem 1rem 1.5rem ${({ theme }) => theme.colors.darkPurple};
  }
`
