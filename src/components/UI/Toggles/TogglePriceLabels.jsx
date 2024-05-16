/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'

const ToggleLabels = ({ setAlert }) => {
  const [toggle, setToggle] = useState(1)

  const handleToggle = () => {
    setToggle((prevState) => !prevState % 2)
    setAlert(toggle)
  }
  return (
    <WrapperTimes>
      <Balls className={toggle ? 'active' : ''} onClick={handleToggle}>
        Annually
      </Balls>
      <Balls className={!toggle ? 'active' : ''} onClick={handleToggle}>
        Monthly
      </Balls>
    </WrapperTimes>
  )
}

export default ToggleLabels

const Balls = styled.div`
  width: 91px;
  height: 43px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: InterMedium;
  gap: 10px;
  padding: 12px 24px;
  text-transform: capitalize;
  color: rgba(52, 58, 63, 0.5);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--black);
  }
  &.active {
    border-radius: 50px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.12);
    background-color: var(--white);
    color: var(--black);
  }
`

const WrapperTimes = styled.div`
  width: fit-content;
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--light-gray);
  border-radius: 60px;
`
