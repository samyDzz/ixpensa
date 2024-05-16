/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Button = ({ children, ...rest }) => {
  return <Btn {...rest}>{children}</Btn>
}

export default Button

const Btn = styled.button`
  display: flex;
  width: 100%;
  border-radius: 8px;
  border: 0;
  font-family: InterMedium;
  cursor: pointer;
  justify-content: center;
  &.danger {
    flex: 2;
    background-color: var(--red);
    padding: 20px;
    color: white;
    text-align: center;
  }
  &.success {
    flex: 2;
    background-color: var(--success);
    padding: 20px;
    color: white;
    text-align: center;
  }
  &.primary {
    flex: 2;
    background-color: var(--blue);
    padding: 20px;
    color: white;
    text-align: center;
  }

  &.info {
    flex: 1;
    background-color: var(--white);
    padding: 20px;
    text-align: center;
    border: 1px solid var(--light-gray);
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
