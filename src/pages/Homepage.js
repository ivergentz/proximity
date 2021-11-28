import React, { useState } from 'react'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Stage from '../components/Stage'

const Homepage = () => {
  const [isOpen, setIsopen] = useState(false)

  const toggle = () => {
    setIsopen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} isOpen={isOpen} />
      <Stage />
      <Content />
      <Footer />
    </>
  )
}

export default Homepage
