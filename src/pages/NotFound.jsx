import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeaderSimple from '../components/HeaderSimple'

import notFound from '../assets/illustrations/404.svg'

export default function NotFound() {
  return (
    <>
      <HeaderSimple />
      <Container>
        <Card>
          <CardLogo src={notFound} alt="cross error" />
          <CardTitle>error 404</CardTitle>
          <CardError>Sorry, this page is not available.</CardError>
          <CardButton to="/">back home</CardButton>
        </Card>
      </Container>
    </>
  )
}

const CardButton = styled(Link)`
  width: 398px;
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 20px 45px;
  border-radius: 8px;
  background-color: var(--blue);
  color: var(--white);
  text-decoration: none;
  text-transform: capitalize;
`
const CardError = styled.p`
  margin-bottom: 30px;
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.48px;
  text-align: center;
  color: var(--black);
`
const CardTitle = styled.h1`
  text-transform: capitalize;
  margin-bottom: 18px;
  font-family: InterSemiBold;
  font-size: 36px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`
const CardLogo = styled.img`
  margin-bottom: 18px;
`
const Card = styled.div`
  width: 540px;
  padding: 38px 71px 28px;
  border-radius: 8px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 100px);
  align-items: center;
  background-color: var(--light-gray);
`
