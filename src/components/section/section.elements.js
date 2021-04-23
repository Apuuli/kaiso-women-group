import styled from "styled-components"

export const SectionContainer = styled.div`
  padding: 2rem 0rem;
  margin: 0 5vw;
`
export const SectionHeader = styled.h2`
  padding: 1 0rem;
  text-align: center;
  font-weight: 900;
  text-decoration: green;
  font-size: clamp(2rem, 2.5vw, 2.25rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkPurple};
  letter-spacing: 0.125rem;
  margin: 2vh;
`
export const SectionBody = styled.div`
  font-size: clamp(0.8rem, 5vw, 1.5rem);
  padding: 2vh 0;
  line-height: 1.8;
  p {
    margin: 2vh;
  }
`
