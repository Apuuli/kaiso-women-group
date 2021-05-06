import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.darkPurple};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.4s ease-in-out;
  opacity: ${({ open }) => (open ? "100%" : 0)};
  top: ${({ open }) => (open ? 0 : " -100%")};
`
export const Icon = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  font-size: 4.5rem;
`
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const SidebarWrapper = styled.div`
  color: #fff;
`
export const SidebarNav = styled.div``
export const SidebarSocial = styled.div``
