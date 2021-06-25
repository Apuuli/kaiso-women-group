import styled from "styled-components"

export const ValueBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 0.25rem solid transparent;
  transition: all 300 linear;
  padding: 1.5rem 0;
  h2 {
    font-size: 1.5rem;
  }
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 0.25rem;
    box-shadow: 0.5rem 1rem 1.5rem ${({ theme }) => theme.colors.darkGreen};
  }
`
