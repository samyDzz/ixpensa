import styled, { css } from 'styled-components'

export const ContainerText = styled.div`
  font-family: InterRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ${({ color }) =>
    !color
      ? css`
          color: var(--white);
        `
      : css`
          color: var(--black);
        `}
`

export const Container = styled.div`
  height: 29px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 32px;
  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--purple);
    `}
  ${({ success }) =>
    success &&
    css`
      background-color: var(--green);
    `}
  ${({ warning }) =>
    warning &&
    css`
      background-color: var(--warning);
    `}
  ${({ danger }) =>
    danger &&
    css`
      background-color: var(--red);
    `}
`
