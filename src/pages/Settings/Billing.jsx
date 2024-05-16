import React from 'react'
import styled, { css } from 'styled-components/macro'
import Header from '../../components/UI/Cards/Header'
import PlanPricing from '../../components/UI/Cards/PlanPricing'

const Account = () => {
  return (
    <Card>
      <Header title={'Billing'} />
      <CardBody>
        <FormGroup>
          <Label>Current subscription</Label>
          <WrapperInput>
            <TypePlan>Trial plan (14 days left)</TypePlan>
            <TypePlanPricing>$ 0/month</TypePlanPricing>
          </WrapperInput>
        </FormGroup>
        <WrapperPlan>
          <Label marginTop={true}>Plan</Label>
          <PlanPricing bordered={true} />
        </WrapperPlan>
      </CardBody>
    </Card>
  )
}

export default Account

const TypePlanPricing = styled.span`
  font-family: InterSemiBold;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0.4px;
  color: var(--dark-blue);
`
const TypePlan = styled.span`
  font-family: InterLight;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0.4px;
  color: var(--dark-blue);
`
const WrapperInput = styled.div`
  padding: 28px 18px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  display: flex;
  justify-content: space-between;
`
const WrapperPlan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const FormGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`

const Label = styled.div`
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: 0.32px;
  text-align: left;
  color: var(--dark-blue);
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 12px;
    `}
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border : 1px solid red; */
  padding-inline: 48px;
  padding-bottom: 28px;
  padding-top: 25px;
`

const Card = styled.div`
  width: 682px;
  padding-top: 24px;
  border-radius: 8px;
  background-color: var(--white);
`
