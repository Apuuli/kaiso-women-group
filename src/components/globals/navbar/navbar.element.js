import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled, { keyframes } from "styled-components"

export const NavWrapper = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  width: 90vw;
  display: flex;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 1rem;
  }
`
export const rotate360 = keyframes`
 from {
 transform: rotate(0deg);
 }
 to {
 transform: rotate(360deg);
 }
`
export const Brand = styled(Link)`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  .logo-image {
    animation: ${rotate360} infinite 120s linear;
    &:hover {
      animation: ${rotate360} infinite 1.5s linear;
    }
  }
`

export const Burger = styled(FaBars)`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  display: flex;
  font-size: 4rem;
  padding: 0.5rem 1rem;
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkPurple};
  @media (min-width: 768px) {
    display: none;
  }
`
