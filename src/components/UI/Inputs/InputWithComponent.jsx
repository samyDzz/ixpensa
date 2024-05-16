/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

/**
 *
 * @param {{ id : String, label: String, component : ReactComponentElement }} props
 * @returns FC
 */
const InputWithComponent = ({ id, label, component, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Wrapper {...rest}>
        <input id={id} {...rest} />
        <Right>{component}</Right>
      </Wrapper>
    </Container>
  )
}

export default InputWithComponent

const Right = styled.div`
  display: flex;
  flex: 0.35;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px 0 0;
  padding: 6px 6px 6px 16px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  :focus-within {
    border: 1px solid transparent;
    outline-width: var(--outline-width);
    outline-color: var(--outline-color);
    outline-style: var(--outline-style);
  }
  input {
    display: flex;
    flex: 1;
    outline: 0;
    border: 0;
    font-family: InterRegular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-blue);
  }
`

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
`
