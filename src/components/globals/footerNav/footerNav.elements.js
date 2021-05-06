import { Link } from "gatsby"
import styled from "styled-components"

export const FooterLinkContainer = styled.div`
  display: flex;
  padding: 3vh 2vw;
  margin: 1vh 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FooterLinkItem = styled(Link)`
  width: 100%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;
  color: inherit;
  letter-spacing: 0.125rem;
  font-weight: 600;
  margin: 1vh 0;
  padding: 1vh 0;
  text-align: center;
`
