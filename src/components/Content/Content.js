import React from 'react'
import styled from 'styled-components'
import { contentdata } from './contentdata'

const Content = () => {
  return (
    <ContentContainer>
      {contentdata.map(data => (
        <div key={data.id}>
          <Headline>{data.headline}</Headline>
          <ul>
            <li>{data.li1}</li>
            <li>{data.li2}</li>
            <li>{data.li3}</li>
          </ul>
        </div>
      ))}
    </ContentContainer>
  )
}

export default Content

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.8rem 1rem 1rem 1.5rem;
  background: var(--bg-white);
`
const Headline = styled.h2`
  font-weight: 500;
  font-size: 1rem;
`

const Test = styled.div``
