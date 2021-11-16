import React from 'react'
import styled from 'styled-components'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {console.log('Sidebar: ', isOpen)}

      <SidebarContainer isOpen={isOpen}>
        <SidebarSection>
          <li onClick={toggle}>one</li>
          <li onClick={toggle}>two</li>
          <li onClick={toggle}>three</li>
        </SidebarSection>
      </SidebarContainer>
    </>
  )
}

export default Sidebar

const SidebarContainer = styled.section`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: auto;
  background: #fff;
  color: var(--grey);
  left: 0;
  margin-bottom: 0;
  margin-top: 4rem;
  transition: 1s ease-in;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`

const SidebarSection = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100vw;

  li {
    font-weight: 300;
    width: 100%;
    padding: 12px 0;
    margin: 1rem;
    text-transform: uppercase;
    border-bottom: 1px solid var(--bg-bright);
    cursor: pointer;

    :hover {
      font-weight: 500;
      font-size: 1.1rem;
      color: var(--text-dark);
    }
  }
`
