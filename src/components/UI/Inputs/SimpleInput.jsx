/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const SimpleInput = ({ id, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </Container>
  )
}

export default SimpleInput

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  flex: 1;
  label {
    font-family: InterMedium;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--light-black);
  }
  input {
    width: 100%;
    height: var(--height-button);
    margin: 6px 0 0;
    padding: 19px 20px 20px 16px;
    border-radius: 8px;
    border: solid 1px var(--light-gray);
    background-color: var(--white);
    :focus {
      border: 1px solid transparent;
      outline-width: var(--outline-width);
      outline-color: var(--outline-color);
      outline-style: var(--outline-style);
    }
  }
`
