import React from 'react'
import styled from 'styled-components'
import { contentdata } from './contentdata'

const Content = () => {
  return (
    <ContentContainer>
      <Container>
        {contentdata.map(data => (
          <div key={data.id}>
            <Headline>{data.headline}</Headline>
            <ContentList>
              <li>{data.li1}</li>
              <li>{data.li2}</li>
              <li>{data.li3}</li>
              {data.li4 ? <li>{data.li4}</li> : ''}
              {data.li5 ? <li>{data.li5}</li> : ''}
            </ContentList>
          </div>
        ))}
        <Headline>Das ist jetzt zu tun:</Headline>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          officia, quod sapiente eligendi sequi sint dignissimos inventore ipsum
          iste alias dolores. Animi, ut vitae expedita libero assumenda dolorum
          similique quasi!
        </p>
      </Container>
    </ContentContainer>
  )
}

export default Content

const ContentContainer = styled.section`
  text-align: left;
  padding: 0.8rem 0rem 1rem 0rem;
  background: var(--bg-white);

  p {
    font-weight: 200;
    line-height: 1.5rem;

    @media (min-width: 680px) {
      font-size: 1.25rem;
      line-height: 1.85rem;
    }
  }

  @media (min-width: 680px) {
    li {
      font-size: 1.25rem;
      line-height: 1.85rem;
    }
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 920px;
  padding: 0.8rem 1.5rem 1rem 1.5rem;
`

const Headline = styled.h2`
  font-weight: 500;
  font-size: 1rem;

  @media (min-width: 680px) {
    margin-top: 1.9rem;
    font-size: 1.3rem;
  }
`

const ContentList = styled.ul`
  font-weight: 200;
  line-height: 1.5rem;
`
