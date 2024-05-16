import React from 'react'
import styled from 'styled-components'
import PlanPricing from '../../components/UI/Cards/PlanPricing'

const Pricing = () => {
  return (
    <ContainerFluid>
      <Container className="container">
        <Title>Pricing</Title>
        <Descr>
          One plan.
          <br />
          start now for free.
        </Descr>
        <PlanPricing addNoCardText addIllustration={true} marginTop={true} />
      </Container>
    </ContainerFluid>
  )
}

export default Pricing

const Descr = styled.h5`
  font-family: InterLight;
  font-size: 48px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-blue);
`
const Title = styled.span`
  font-family: InterSemiBold;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 4.8px;
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 18px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerFluid = styled.div`
  /* height: 833px; */
  padding: 52px 0 40px 0px;
  background-color: var(--purple);
`
