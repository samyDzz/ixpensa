import React from 'react'
import styled from 'styled-components'

import Icon1 from '../../assets/icons/analytics/Icon01.svg'
import Icon2 from '../../assets/icons/analytics/Icon02.svg'
import Icon3 from '../../assets/icons/analytics/Icon03.svg'

const Analytics = () => {
  return (
    <ContainerFluid>
      <Container className="container">
        <Title>What we do</Title>
        <Descr>
          Easy accounting as it
          <br /> should be.
        </Descr>
        <Wrapper>
          <Card>
            <CardIcon src={Icon1} alt="switch" />
            <CardTitle>Track your transactions</CardTitle>
            <CardDescription>
              Track your expense and income easily
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={Icon2} alt="analytics" />
            <CardTitle>Financial Analysis</CardTitle>
            <CardDescription>
              Have peace of mind knowing all your monthly profit and checking
              your progress in a simple user interface.{' '}
            </CardDescription>
          </Card>
          <Card>
            <CardIcon src={Icon3} alt="export" />
            <CardTitle>Export your report</CardTitle>
            <CardDescription>
              Export your reports via CSV files into Excel made easy.
            </CardDescription>
          </Card>
        </Wrapper>
      </Container>
    </ContainerFluid>
  )
}

export default Analytics

const CardDescription = styled.span`
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--light-black);
  text-align: center;
  max-width: 330px;
`
const CardTitle = styled.span`
  font-family: InterLight;
  font-size: 24px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
  margin-bottom: 18px;
`
const CardIcon = styled.img`
  width: 60px;
  margin-bottom: 28px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  margin-top: 60px;
`
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
  color: var(--blue);
  margin-bottom: 18px;
`
const Container = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ContainerFluid = styled.div`
  height: 684px;
  padding: 86px 0px 170px 0px;
  background-color: var(--white);
`
