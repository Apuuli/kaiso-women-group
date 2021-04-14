import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const MenuItem = ({ path, name }) => <Item to={path}>{name}</Item>

export default MenuItem

const Item = styled(Link)`
  display: block;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mediumPurple};
  font-weight: 700;
  cursor: pointer;
  ${({ theme }) => theme.transitionDefault};
  &:hover {
    background: ${({ theme }) => theme.colors.darkGreen};
    color: #fff;
    border-radius: 0.12rem;
  }
`
MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
