import { Link } from "gatsby"
import styled from "styled-components"

export const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterLinkItem = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  margin: 0.25rem 1rem;
  text-align: center;
`
