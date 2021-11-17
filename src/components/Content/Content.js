import React from 'react'
import styled from 'styled-components'
import { contentdata } from './contentdata'

const Content = () => {
  return (
    <ContentContainer>
      {contentdata.map(data => (
        <ContentListContainer key={data.id}>
          <Headline>{data.headline}</Headline>
          <ContentList>
            <li>{data.li1}</li>
            <li>{data.li2}</li>
            <li>{data.li3}</li>
          </ContentList>
        </ContentListContainer>
      ))}
      <Headline>Das ist jetzt zu tun:</Headline>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        officia, quod sapiente eligendi sequi sint dignissimos inventore ipsum
        iste alias dolores. Animi, ut vitae expedita libero assumenda dolorum
        similique quasi!
      </p>
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

  p {
    font-weight: 200;
    line-height: 1.5rem;
  }
`
const Headline = styled.h2`
  font-weight: 500;
  font-size: 1rem;
`

const ContentList = styled.ul`
  font-weight: 200;
  line-height: 1.5rem;
`

const ContentListContainer = styled.div``
