import React, { memo } from 'react'
import { Container, ContainerText } from './Badge.style.js'

const index = ({ text, ...rest }) => {
  console.log({ ...rest })
  return (
    <Container {...rest}>
      <ContainerText {...rest}>{text}</ContainerText>
    </Container>
  )
}

export default memo(index)
