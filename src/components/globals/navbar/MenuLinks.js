import React from "react"
import styled from "styled-components"
import { menuLinks } from "../../../constants/menuLinks"
import MenuItem from "./MenuItem"

const MenuLinks = ({ open }) => (
  <MenuListing>
    {menuLinks &&
      menuLinks.map((item, index) => <MenuItem key={index} {...item} />)}
  </MenuListing>
)

export default MenuLinks

const MenuListing = styled.div`
  display: flex;
  padding: 0.6rem 1.2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: center;
    align-items: center;
    padding: 1em 2rem;
  }
`
