import styled from "styled-components"

export const AddressContainer = styled.address`
  font-style: normal;
  display: flex;
  padding: 3vh 2vw;
  margin: 1vh 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  hr {
    color: ${({ theme }) => theme.colors.mediumPurple};
    margin: 2vh 0;
  }
`
export const AddressHeader = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.mediumPurple};
  text-transform: capitalize;
  padding: 0.5vh 0;
`
export const AddressBody = styled.div`
  font-size: 1.2rem;
  padding-right: 2vw;
  margin: 0.5vh 0;
  text-align: start;
  p {
    padding: 0.25vh 0;
    margin: 0.25vh 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    margin-left: 2vh;
    &:hover {
      color: ${({ theme }) => theme.colors.mediumPurple};
    }
  }
`
