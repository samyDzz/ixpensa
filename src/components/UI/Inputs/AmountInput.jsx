/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useUserStore } from '../../../stores/Auth.store'

const AmountInput = ({ value = '', onChange = () => {}, ...rest }) => {
  const currency = useUserStore.getState().user.infos.alphabetic_code
  return (
    <Container>
      <input value={value} placeholder="0.00" onChange={onChange} {...rest} />
      <span>{currency}</span>
    </Container>
  )
}

export default AmountInput

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* margin: 6px 0 19px; */
  padding: 17px 17px 17px 0px;
  background-color: var(--white-two);
  &:after {
    content: '';
    width: 48px;
    height: calc(var(--height-input) + 21px);
    position: absolute;
    left: -48px;
    bottom: 0;
    background-color: var(--white-two);
  }
  &:before {
    content: '';
    width: 48px;
    height: calc(var(--height-input) + 21px);
    position: absolute;
    right: -48px;
    bottom: 0;
    background-color: var(--white-two);
  }
  input {
    border: 0;
    outline: 0;
    background-color: transparent;
    font-family: InterMedium;
    font-size: 40px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-blue);
    width: 100%;
  }
  span {
    font-family: InterRegular;
    font-size: 40px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--blue-gray);
  }

  /* hide the arrow of default input type=number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
