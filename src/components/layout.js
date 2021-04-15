import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./globals/navbar/Navbar"
import styled from "styled-components"
import Footer from "./globals/footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Kwg>
      <Navbar />
      <main>{children}</main>
      <Footer data={data} />
    </Kwg>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export const Kwg = styled.div`
  background: ${({ theme }) => theme.colors.lightGreen};
`
