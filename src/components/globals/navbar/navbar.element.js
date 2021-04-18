import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"

export const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  width: 90vw;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Brand = styled(Link)`
  padding: 0.25rem 0.5rem;
`
export const Burger = styled(FaBars)`
  display: flex;
  font-size: 3rem;
  padding: 0.5rem;
  background: #e0e0e0;
  @media (min-width: 768px) {
    display: none;
  }
`
