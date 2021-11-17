import React from 'react'
import styled from 'styled-components'

const Stage = () => {
  return (
    <StageContainer>
      <Headline>Moinjoirno Bitches</Headline>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus fugiat
        placeat ducimus amet sit optio blanditiis. Temporibus possimus
        reiciendis labore officiis eum esse quos laudantium cumque, sint odio
        voluptatibus nam? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Id unde sit exercitationem, porro perferendis impedit magnam ipsum
        sequi, eos nostrum consectetur iusto voluptas assumenda minus aperiam
        repudiandae error dignissimos voluptatibus.
      </Text>
    </StageContainer>
  )
}

export default Stage

const StageContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 5rem;
  padding: 0.8rem 1rem 1rem 1.5rem;
  background: var(--bg-bright);
`

const Headline = styled.h1`
  font-size: 1.5rem;
  line-height: 1.6rem;
  font-weight: 200;
  text-transform: none;
  letter-spacing: normal;
`

const Text = styled.p`
  font-weight: 400;
`
