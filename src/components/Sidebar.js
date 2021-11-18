import React from 'react'
import styled from 'styled-components'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {console.log('Sidebar: ', isOpen)}

      <SidebarContainer isOpen={isOpen}>
        <SidebarSection>
          <li onClick={toggle}>stage</li>
          <li onClick={toggle}>me</li>
          <li onClick={toggle}>footer</li>
          <li className="red" onClick={toggle}>
            <a href="https://www.google.de" target="_blank">
              CV
            </a>
          </li>
          <li className="red" onClick={toggle}>
            <a href="https://www.google.de" target="_blank">
              Zeugnisse
            </a>
          </li>
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
  /* margin-top: 4rem; */
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  transition: 1s ease;
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
  .red {
    :hover {
      font-weight: 500;
      font-size: 1.1rem;
    }

    a {
      color: red;
      text-decoration: none;
    }
    a:active {
      color: none;
    }
  }
`
