import { React, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import styled from 'styled-components'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <HeaderContainer>
        <h2>i.gentz</h2>
        <IconContainer>
          <MobileIcon onClick={handleClick} />
          {console.log(toggle)}
        </IconContainer>
      </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  height: 5rem;
  background: var(--bg-white);
  color: var(--text-dark);
  z-index: 100;

  h2 {
    margin-left: 2rem;
    cursor: pointer;
  }
`

const IconContainer = styled.div`
  margin-right: 2rem;
`

const MobileIcon = styled(GiHamburgerMenu)`
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
`
