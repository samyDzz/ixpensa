import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = ({ children }) => {
  return <CardTitle>{children}</CardTitle>
}

Title.propTypes = {
  children: PropTypes.element
}

export default Title

const CardTitle = styled.span`
  font-family: InterSemiBold;
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
  margin-bottom: 25px;
  display: flex;
`
