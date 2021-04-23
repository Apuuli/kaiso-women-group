import { Link } from "gatsby"
import styled from "styled-components"

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  transition: all 0.6s ease-in-out;

  @media (max-width: 768px) {
    display: none;
    height: 0;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  height: 100%;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: ${({ theme }) => theme.colors.darkPurple};
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  margin: 0.25vh 0.5vw;
  padding: 0.5vh 1vw;
  border-bottom: 0.2rem solid transparent;
  text-transform: capitalize;
  letter-spacing: 0.125rem;
  transition: all 0.4s ease-in-out;
  &:hover {
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
  }
  &.is-active {
    color: ${({ theme }) => theme.colors.darkPurple};
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
  }
`
