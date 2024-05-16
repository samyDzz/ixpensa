/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ToggleLabels from '../Toggles/TogglePriceLabels'
import Badge from '../Badges/index'
import SimpleButton from '../Buttons/SimpleButton'
import pricingIllustration from '../../../assets/illustrations/pricingIllustration.svg'
import styled, { css } from 'styled-components'

const PlanPricing = ({
  addNoCardText,
  addIllustration = false,
  buttonText = 'Start your 14 day free trial',
  bordered,
  marginTop
}) => {
  const [planIndex, setAlert] = useState(0)

  const PLANS = [
    {
      id: 1,
      price: 40,
      description: 'Billed annually',
      showSaveBadge: true
    },
    {
      id: 2,
      price: 1.99,
      description: 'Billed monthly',
      showSaveBadge: false
    }
  ]
  return (
    <Container
      addIllustration={addIllustration}
      bordered={bordered}
      marginTop={marginTop}
    >
      <ToggleLabels setAlert={setAlert} />
      <Price>{PLANS[planIndex].price}</Price>
      <PlanDescription>{PLANS[planIndex].description}</PlanDescription>
      {PLANS[planIndex].showSaveBadge && (
        <Badge text={'Save 2 months'} color={'var(--black)'} success />
      )}
      <Footer>
        <SimpleButton
          bg={'var(--blue)'}
          text={buttonText}
          color={'var(--white)'}
          rounded
        />
        {addNoCardText && (
          <FooterNoCreditCard>No Card required</FooterNoCreditCard>
        )}
      </Footer>
    </Container>
  )
}

PlanPricing.propTypes = {}

export default PlanPricing

const FooterNoCreditCard = styled.span`
  margin-top: 16px;
  font-family: InterLight;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-black);
`

const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`

const PlanDescription = styled.span`
  font-family: InterLight;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-black);
  margin-bottom: 8px;
`

const Price = styled.span`
  margin-top: 47px;
  font-family: InterMedium;
  font-size: 96px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
  position: relative;
  &:before {
    content: 'US$';
    position: absolute;
    top: 20px;
    left: -35px;
    font-family: InterLight;
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-blue);
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 398px;
  height: 528px;
  padding: 48px 50px 28px;
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 32px;
    `}
  /* margin-top: 32px; */
  border-radius: 16px;
  background-color: var(--white);
  position: relative;
  ${({ bordered }) =>
    bordered &&
    css`
      border: 1px solid var(--light-gray);
    `}
  ${({ addIllustration }) =>
    addIllustration &&
    css`
      ::before {
        content: url(${pricingIllustration});
        position: absolute;
        bottom: 0%;
        left: -300px;
      }
    `}
`
