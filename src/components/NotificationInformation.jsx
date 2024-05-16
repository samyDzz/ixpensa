import React from 'react'
import styled from 'styled-components'

const NotificationInformation = () => {
  console.log('refresh popup NotificationInformation !')
  return (
    <Container>
      <span>
        One quick thing: We need you to verify your email address by clicking
        the link we sent. <a href="#">Send it again</a>
      </span>
    </Container>
  )
}

export default React.memo(NotificationInformation)

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 16px;
  background-color: var(--green);
  span {
    font-family: InterRegular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--dark-blue);
    a {
      font-family: InterSemiBold;
    }
  }
`
