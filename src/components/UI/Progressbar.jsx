/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Progressbar = ({ width, bg, bgActive }) => {
  return (
    <Bg bg={bg}>
      <Progress width={width} bgActive={bgActive}></Progress>
    </Bg>
  )
}

export default Progressbar

const Progress = styled.div`
  height: 4px;
  background-color: ${({ bgActive }) => bgActive || 'var(--blue)'};
  width: ${({ width }) => width || '0%'};
`
const Bg = styled.div`
  height: 4px;
  background-color: ${({ bg }) => bg || 'var(--light-gray)'};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`
