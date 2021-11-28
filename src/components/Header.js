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
        <MenuContainer>
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
              <MenuItem className="red">
                <a href="https://google.de" rel="noreferrer" target="_blank">
                  dolores
                </a>
              </MenuItem>
              <MenuItem className="red">dolores</MenuItem>
            </MenuItems>
          </MenuItemsContainer>
        </MenuContainer>
      </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background: var(--bg-white);
  width: 100vw;
  z-index: 1;

  img {
    width: 45px;
    height: 45px;
    cursor: pointer;
  }

  @media (min-width: 680px) {
    height: 6rem;
  }
`

const MenuContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: 920px;
  background: var(--bg-white);
  color: var(--text-dark);
  top: 0;
  height: 5rem;
  align-items: space-between;

  @media (max-width: 936px) {
    justify-content: space-evenly;
    width: 100%;
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

  .red {
    color: red;
  }
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

  a {
    color: red;
    text-decoration: none;
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
