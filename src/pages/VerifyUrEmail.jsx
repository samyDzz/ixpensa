import React from 'react'
import HeaderSimple from '../components/HeaderSimple'
import styled from 'styled-components/macro'
import EmailIcon from '../assets/icons/Email_illus.svg'

const VerifyUrEmail = () => {
  return (
    <Container>
      <HeaderSimple />
      <Card>
        <CardIcon src={EmailIcon} />
        <CardTitle>Verify your email</CardTitle>
        <CardDescr>
          Check your email and click the link to activate your account.
        </CardDescr>
        <CardInfos>
          Can’t find the email we sent you? Try refreshing your email inbox,
          checking your spam folder.
        </CardInfos>
        <CardButton>Login</CardButton>
      </Card>
    </Container>
  )
}

export default VerifyUrEmail

const CardButton = styled.button`
  width: 398px;
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 28px 6px 0;
  padding: 20px 45px;
  border-radius: 8px;
  background-color: var(--blue);
  border: 0;
  color: white;
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  margin-top: 28px;
  cursor: pointer;
`
const CardInfos = styled.p`
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.48px;
  text-align: center;
  color: var(--black);
  margin-top: 48px;
`
const CardDescr = styled.p`
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.48px;
  text-align: center;
  color: var(--dark-blue);
  margin-top: 28px;
`
const CardTitle = styled.h1`
  font-family: InterSemiBold;
  font-size: 36px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark-blue);
  margin-top: 28px;
`

const CardIcon = styled.img``

const Card = styled.div`
  width: 540px;
  height: 457px;
  padding: 38px 65px 28px;
  border-radius: 8px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-gray);
  height: 100vh;
`
