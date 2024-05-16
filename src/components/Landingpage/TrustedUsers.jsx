import React from 'react'
import styled from 'styled-components'

const TrustedUsers = () => {
  return (
    <ContainerFluid>
      <Container className="container">
        <h2>Trusted by thaunsands of users</h2>
        <h3>+12000 users in 3 months</h3>
      </Container>
    </ContainerFluid>
  )
}

export default TrustedUsers

const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  h2 {
    font-family: InterLight;
    font-size: 48px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--white);
  }
  h3 {
    font-family: InterSemiBold;
    font-size: 32px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--purple);
  }
`

const ContainerFluid = styled.div`
  display: flex;
  height: 251px;
  padding: 66px 48px 61px;
  background-color: var(--light-black);
`
