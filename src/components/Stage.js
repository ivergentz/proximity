import React from 'react'
import styled from 'styled-components'

const Stage = () => {
  return (
    <StageContainer>
      <Headline>Bewerbung: Junior Developer (m/w/d)</Headline>
      <Text>
        Wir arbeiten nutzerzentriert, zielorientiert und umsetzungsstark. Unsere
        Experten und Talente aus den Disziplinen Beratung, User Experience
        Design und Technologie arbeiten in cross-funktionalen Teams nach Scrum,
        um die hohen Ansprüche unserer Automotive Kunden zu erfüllen. Dadurch
        bieten wir Transparenz, Flexibilität und ein minimiertes Projektrisiko.
        Durch unsere konstruktive Fehlerkultur haben wir stets die Möglichkeit
        uns weiterzuentwickeln. Wenn Du dich in der beschriebenen Kultur und
        Arbeitsweise wiederfindest, ergreife die Chance und werde Teil von
        Proximity Technology
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
  padding: 0.8rem 1.5rem 1rem 1.5rem;
  background: var(--bg-bright);
`

const Headline = styled.h1`
  font-size: 1.5rem;
  line-height: 1.6rem;
  font-weight: 200;
  text-transform: none;
  letter-spacing: normal;

  @media (min-width: 680px) {
    margin-top: 3rem;
    font-size: 1.9rem;
  }
`

const Text = styled.p`
  font-weight: 400;

  @media (min-width: 680px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`
