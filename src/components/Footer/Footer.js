import React from 'react'
import styled from 'styled-components'
import { footerdata } from './footerdata'

const Footer = () => {
  return (
    <FooterContainer>
      {footerdata.map(data => (
        <div key={data.id}>
          <Headline>{data.headline}</Headline>
          <img src={data.img1} alt="" />
          <Text>{data.para1}</Text>
          <img src={data.img2} alt="" />
          <Text>{data.para2}</Text>
        </div>
      ))}
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  background: var(--bg-dark);
  color: var(--text-bright);
  min-width: 290px;
  height: auto;
  margin: 0 auto;
  padding-left: 30px;

  div {
    margin: 0;
    padding: 0;
    line-height: 0;
  }

  div:last-child {
    margin-bottom: 3rem;
  }
`

const Headline = styled.h3`
  font-size: 0.7rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const Text = styled.p`
  font-weight: 300;
  font-size: 0.65rem;
  line-height: 0.6rem;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`
