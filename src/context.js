import { useStaticQuery } from "gatsby"
import React, { useState, useContext } from "react"

const GatsbyContext = React.createContext()

//Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    image: "",
    desc: "",
    url: "",
  })

  const openModal = (image = "", desc = "", url = "") => {
    setModal({ isOpen: true, image, desc, url })
  }
  const closeModal = () => {
    setModal({ isOpen: false, image: "", desc: "", url: "" })
  }

  return (
    <GatsbyContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </GatsbyContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(GatsbyContext)
}

export { GatsbyContext, GatsbyProvider }
