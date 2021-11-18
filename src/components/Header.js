import { React } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import styled from 'styled-components'
import ig_logo from '../images/ig_logo.png'

const Header = ({ toggle, isOpen }) => {
  return (
    <>
      {console.log('Header: ', isOpen)}
      <HeaderContainer>
        <img src={ig_logo} alt="i.gentz" />
        <IconContainer>
          {!isOpen ? (
            <MobileBurgerIcon onClick={toggle} />
          ) : (
            <MobileQuitIcon onClick={toggle} />
          )}
        </IconContainer>
        <MenuItemsContainer isOpen={isOpen}>
          <MenuItems>
            <MenuItem>lorem</MenuItem>
            <MenuItem>ipsum</MenuItem>
            <MenuItem>dolores</MenuItem>
          </MenuItems>
        </MenuItemsContainer>
      </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  height: 5rem;
  background: var(--bg-white);
  color: var(--text-dark);
  z-index: 10;

  img {
    width: 45px;
    height: 45px;
    margin-left: 2rem;
    cursor: pointer;
  }

  @media (min-width: 680px) {
    height: 6rem;
  }
`

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 2rem;

  @media (min-width: 937px) {
    display: none;
  }
`

const MenuItemsContainer = styled.nav`
  display: flex;
  width: 100%;

  @media (max-width: 937px) {
    display: none;
  }
`

const MenuItems = styled.ul`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const MenuItem = styled.li`
  margin-left: 3rem;
  color: var(--grey);
  font-weight: 100;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-right: 3rem;
  list-style-type: none;
  cursor: pointer;

  :hover {
    color: var(--text-dark);
    font-weight: 300;
  }

  a:active {
    font-weight: 300;
  }
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
