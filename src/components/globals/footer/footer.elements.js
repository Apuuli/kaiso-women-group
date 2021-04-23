import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.lightPurple};
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const FooterBody = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const FooterLogo = styled.div`
  color: #fff;
  text-align: center;
  width: 90vw;
  margin: 0 auto;
  border-radius: 0.25rem;
  padding: 2vh 0rem;
  background: ${({ theme }) => theme.colors.darkPurple};
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 900;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    margin-left: 1vw;
  }
`
