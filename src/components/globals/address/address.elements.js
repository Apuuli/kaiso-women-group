import styled from "styled-components"

export const AddressContainer = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  padding: 1rem 2rem;
  h3 {
    font-size: 1.25rem;
    font-weight: bolder;
    letter-spacing: 0.125rem;
    font-style: normal;
    font-family: ${({ theme }) => theme.fonts.code};
    padding: 0.25rem 5rem;
    margin: 0.25rem 0.5rem;
  }
`
