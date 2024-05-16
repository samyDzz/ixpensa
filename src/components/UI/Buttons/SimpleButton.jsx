/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import Loader from '../Loaders/loader'
/**
 *
 * @param {{ text: string,
 * color: string,
 * icon: {src : Icon, alt : string},
 * width: CSSStyleRule,
 * padding : CSSStyleRule,
 * marginTop : Number,
 * disabled : Boolean,
 * rounded : Boolean
 *  }} props
 * @returns FC
 */
const SimpleButton = ({
  text,
  color,
  icon = null,
  isLoading = false,
  isFetching = false,
  ...rest
}) => {
  return (
    <Btn color={color} {...rest}>
      {icon && <img src={icon.src} alt={icon.alt} />}
      {(isLoading || isFetching) && <Loader />}
      <span color={color}>{text}</span>
    </Btn>
  )
}

export default SimpleButton

const Btn = styled.button`
  display: flex;
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '0'};
  justify-content: center;
  align-items: center;
  height: var(--height-button);
  border: 0;
  font-family: InterMedium;
  justify-content: center;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop + 'px' : 0)};
  background-color: ${({ bg }) => bg || 'var(--light-gray)'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${({ rounded }) => (rounded ? '59px' : '8px')};
  gap: 12px;
  span {
    font-family: InterMedium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${({ color }) => color || 'var(--black)'};
  }
`
