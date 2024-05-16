/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Message = ({ text, html }) => {
  return (
    <Container>
      {html && <p dangerouslySetInnerHTML={{ __html: html }}></p>}
      {text && <p>{text}</p>}
    </Container>
  )
}

export default Message

const Container = styled.div`
  margin: 24px 0px;
  padding: 16px 18px 16px 16px;
  border-radius: 8px;
  background-color: rgba(255, 59, 56, 0.1);
  p {
    font-family: InterRegular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  * {
    color: var(--red) !important;
  }
`
