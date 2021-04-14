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
  align-items: center;
`
