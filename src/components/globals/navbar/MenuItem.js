import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const MenuItem = ({ path, name }) => <Item to={path}>{name}</Item>

export default MenuItem

const Item = styled(Link)`
  text-transform: capitalize;
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mediumPurple};
  font-weight: 700;
  margin: 1rem, 2rem;
  cursor: pointer;
  ${({ theme }) => theme.transitionDefault};
  &:hover {
    ${({ theme }) => theme.colors.border}
    color: purple;
  }
`
MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
