import React from 'react'
import styled from 'styled-components'

const HeaderSimple = () => {
  return (
    <Container>
      <Logo>Expensa</Logo>
    </Container>
  )
}

export default HeaderSimple

const Logo = styled.h1`
  font-family: InterSemiBold;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`

const Container = styled.div`
  width: 100%;
  height: 86px;
  padding: 31px 0px 26px 84px;
  background-color: var(--white);
`
