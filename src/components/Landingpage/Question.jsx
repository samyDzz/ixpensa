/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro'

import upIcon from '../../assets/icons/ProfileDropdown.svg'

const Question = ({ qst, res, opened }) => {
  const [deploy, setDeploy] = useState(false)
  return (
    <Container opened={deploy}>
      <Title>
        <span>{qst}</span>
        <img src={upIcon} alt="arrow" onClick={() => setDeploy(!deploy)} />
      </Title>
      <Response opened={deploy}>{res}</Response>
    </Container>
  )
}

export default Question

const Response = styled.p`
  font-family: InterLight;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: var(--light-black);
  transition: all 0.3s;
  overflow: hidden;
  ${({ opened }) =>
    opened
      ? css`
          transition: all 0.3s;
          opacity: 1;
        `
      : css`
          transition: all 0.3s;
          opacity: 0;
        `}
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-family: InterSemiBold;
    font-size: 24px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: var(--dark-blue);
  }
  img {
    cursor: pointer;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 700px;
  padding: 26px;
  border-radius: 8px;
  background-color: var(--light-gray);
  transition: all 0.3s;
  ${({ opened }) =>
    opened
      ? css`
          transition: all 0.3s;
          max-height: 500px;
        `
      : css`
          transition: all 0.3s;
          max-height: 85px;
        `}
`
