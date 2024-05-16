/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Icon = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
}

const Text = ({ children, ...rest }) => {
  return <TextStyle {...rest}>{children}</TextStyle>
}

const DeleteButton = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

DeleteButton.Text = Text
DeleteButton.Icon = Icon

export default DeleteButton

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
`

const TextStyle = styled.span`
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--red);
`
