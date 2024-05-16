import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Toggle = ({
  isActivated = false,
  onActive = () => '',
  onInactive = () => ''
}) => {
  console.log('refresh Toggle !')
  const [active, setActive] = useState(isActivated)

  useEffect(() => {
    if (active) {
      onActive()
    } else {
      onInactive()
    }
  }, [active])

  return (
    <Container active={active} onClick={() => setActive(!active)}>
      <Circle active={active}></Circle>
    </Container>
  )
}

Toggle.propTypes = {
  isActivated: PropTypes.bool,
  onActive: PropTypes.func,
  onInactive: PropTypes.func
}

export default memo(Toggle)

const Circle = styled.div`
  width: 20px;
  height: 20px;
  flex-grow: 0;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  border-radius: 50%;
  position: absolute;
  transition: all 0.3s;
  ${({ active }) =>
    !active
      ? css`
          left: 4px;
        `
      : css`
          left: 24px;
        `};
`
const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: 48px;
  height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 4px;
  border-radius: 24px;
  ${({ active }) =>
    active
      ? css`
          background-color: var(--success);
        `
      : css`
          background-color: var(--light-gray);
        `};
`
