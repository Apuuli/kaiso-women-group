import { Link } from "gatsby"
import styled from "styled-components"

export const LinkContainer = styled.div`
  display: none;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 0.13rem;
  text-align: center;
  margin: 0.25rem 0.5rem;
  padding: 0.5rem 1rem;
  border-bottom: 0.2rem solid transparent;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.mediumPurple};
  }
  &.is-active {
    color: ${({ theme }) => theme.colors.darkPurple};
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.darkPurple};
  }
`
