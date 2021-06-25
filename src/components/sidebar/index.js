import React from "react"
import FooterNav from "./../globals/footerNav/index"
import {
  Icon,
  SidebarContainer,
  CloseIcon,
  SidebarNav,
  SidebarSocial,
  SidebarWrapper,
} from "./sidebar.elements"

const Sidebar = ({ open, toggleMenu }) => {
  return (
    <SidebarContainer open={open} onClick={toggleMenu}>
      <Icon>
        <CloseIcon onClick={toggleMenu} />
      </Icon>
      <SidebarWrapper>
        <FooterNav />
        <SidebarNav>
          <SidebarSocial />
        </SidebarNav>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
