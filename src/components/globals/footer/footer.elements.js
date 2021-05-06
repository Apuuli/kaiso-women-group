import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  margin-top: 10vh;
  padding: 4vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const FooterBody = styled.div`
  color: inherit;
  width: 90vw;
  margin: 2vh auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const FooterLogo = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  margin: 4vh auto;
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
