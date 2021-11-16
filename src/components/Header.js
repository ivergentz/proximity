import { React } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import styled from 'styled-components'

const Header = ({ toggle, isOpen }) => {
  return (
    <>
      {console.log('Header: ', isOpen)}
      <HeaderContainer>
        <h2>i.gentz</h2>
        <IconContainer>
          {!isOpen ? (
            <MobileBurgerIcon onClick={toggle} />
          ) : (
            <MobileQuitIcon onClick={toggle} />
          )}
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
  z-index: 10;

  h2 {
    margin-left: 2rem;
    cursor: pointer;
  }
`

const IconContainer = styled.div`
  margin-right: 2rem;
`

const MobileBurgerIcon = styled(GiHamburgerMenu)`
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
`

const MobileQuitIcon = styled(GrFormClose)`
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
`
