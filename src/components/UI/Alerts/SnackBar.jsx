/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

import AlertSnackIcon from '../../../assets/icons/AlertSnackIcon.svg'

const Text = ({ children, ...rest }) => {
  return <TextStyle {...rest}>{children}</TextStyle>
}

const AlertSnackbar = ({ children, onClick, ...rest }) => {
  useEffect(() => {
    setTimeout(() => {
      onClick()
    }, 2000)
  }, [onClick])

  const hide = useCallback(() => {
    onClick()
  }, [onClick])

  return (
    <Container
      initial={{
        x: '-350px'
      }}
      animate={{
        x: 0
      }}
      exit={{
        x: '-350px'
      }}
      {...rest}
    >
      {children}
      <WrapperClose onClick={hide}>
        <ImgStyle src={AlertSnackIcon} alt="close icon" />
      </WrapperClose>
    </Container>
  )
}

// linking
AlertSnackbar.Text = Text

export default AlertSnackbar

const ImgStyle = styled.img`
  width: 18px;
  height: 18px;
  /* padding : 8px; */
`

const WrapperClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border-left: 1px solid #347aff;
  padding-left: 7.5px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const TextStyle = styled.span`
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
`

const Container = styled(motion.div)`
  position: fixed;
  bottom: 38px;
  left: 38px;
  width: fit-content;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--blue);
  display: flex;
`
