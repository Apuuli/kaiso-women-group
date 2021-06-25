import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./globals/navbar/index"
import Footer from "./globals/footer"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <Sidebar open={open} toggleMenu={toggleMenu} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
