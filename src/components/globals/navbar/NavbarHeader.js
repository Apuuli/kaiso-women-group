import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

function NavbarHeader({ menu, toggleMenu }) {
  return (
    <HeaderWrapper>
      <Link to="/">
        <a className=" text-purple-600 ">KWG</a>
      </Link>
      /
      <FaAlignRight />
    </HeaderWrapper>
  )
}

export default NavbarHeader

const HeaderWrapper = styled.div``
