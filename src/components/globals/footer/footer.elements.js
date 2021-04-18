import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.lightPurple};
  padding: 0.25rem 5rem;
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
`
export const FooterLogo = styled.div`
  width: 90vw;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.darkPurple};
`
