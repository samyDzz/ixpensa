/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

const Header = ({ title, border = true }) => {
  return (
    <CardHeader border={border}>
      <CardHeaderTitle>{title}</CardHeaderTitle>
    </CardHeader>
  )
}

export default Header

const CardHeaderTitle = styled.span`
  font-family: InterSemiBold;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`

const CardHeader = styled.div`
  padding-bottom: 24px;
  padding-left: 28px;
  ${({ border }) =>
    border
      ? css`
          border-bottom: 1px solid var(--light-gray);
        `
      : css``}
`
