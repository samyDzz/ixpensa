/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Overlay = ({ onClick }) => {
  return <Container onClick={onClick}></Container>
}

export default Overlay

const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`
