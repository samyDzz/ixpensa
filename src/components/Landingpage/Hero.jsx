import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import CreditCardIcon from '../../assets/icons/CreditCard.svg'
import LandingPageIllustration from '../../assets/illustrations/landingPageIllustration.svg'

const Hero = () => {
  return (
    <ContainerFluid>
      <Container>
        <Wrapper>
          <Title>
            The easiest way to manage <br />
            your <span>personal finances.</span>
          </Title>
          <SubTitle>
            Finally a simple way to manage money on the go
            <br /> in the platform.
          </SubTitle>
          <BtnLink to={'/signup'}>Get started for free</BtnLink>
          <Small>
            <img src={CreditCardIcon} alt="credit card" />
            No credit card required.
          </Small>
        </Wrapper>
      </Container>
    </ContainerFluid>
  )
}

export default Hero
const BtnLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 29px 351px 12px 0;
  padding: 18px 24px;
  border-radius: 50px;
  background-color: var(--white);
  width: 220px;
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
  text-decoration: none;
`
const Small = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: InterLight;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
`
const SubTitle = styled.h4`
  font-family: InterLight;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
  margin-top: 18px;
`
const Title = styled.h1`
  font-family: InterBold;
  font-size: 48px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
  span {
    color: var(--green);
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-image: url(${LandingPageIllustration});
  background-repeat: no-repeat;
  background-position: right;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 85px 113px;
  max-width: var(--max-width);
  margin: 0 auto;
`

const ContainerFluid = styled.div`
  display: flex;
  height: 595px;
  background-color: var(--blue);
`
