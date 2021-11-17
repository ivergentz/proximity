import React, { useState } from 'react'
import Content from '../components/Content/Content'
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
      {console.log('Homepage: ', isOpen)}
      <Header toggle={toggle} isOpen={isOpen} />
      <Stage />
      <Content />
    </>
  )
}

export default Homepage
