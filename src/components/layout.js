/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import Modal from "./Modal"
const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Modal />
      {children}
    </main>
  )
}

export default Layout
