import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import SimpleButton from '../../../components/UI/Buttons/SimpleButton'

const Languages = () => {
  const navigate = useNavigate()
  return (
    <CardBodyRow gap={'8'} column>
      <label htmlFor="language">Languages</label>
      <select id="language">
        <option value="0">English (US)</option>
        <option value="1">French (FR)</option>
        <option value="2">Arabic (AR)</option>
      </select>
      <SimpleButton
        bg="var(--blue)"
        color="var(--white)"
        text="Save changes"
        marginTop={68}
      />
      <Cancel onClick={() => navigate(-1)}>Cancel</Cancel>
    </CardBodyRow>
  )
}

export default Languages

const Cancel = styled.span`
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-top: 28px;
  cursor: pointer;
  color: var(--blue-gray);
`

const CardBodyRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 28px;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap + 'px'};
    `}
  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}

  label {
    font-family: InterMedium;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-blue);
  }
  select {
    padding: 19px 16px;
    border-radius: 8px;
    border: solid 1px var(--light-gray);
    background-color: var(--white);
    width: 100%;
    option {
      font-family: InterRegular;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--dark-blue);
    }
  }
`
