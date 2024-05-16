/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { CardFormGroup, CardLabel, CardWrapperInput } from '../../popups/Card'

const FormGroupToggleMonthly = ({ onChange, ...rest }) => {
  return (
    <CardFormGroup style={{ marginTop: '18px' }}>
      <CardLabel>Select Period</CardLabel>
      <CardWrapperInput>
        <Select
          style={{
            width: '100%',
            height: '59px',
            outline: '0',
            border: 0
          }}
          onChange={onChange}
          {...rest}
        >
          <option value="1">Every month</option>
          <option value="2">Every 2 weeks</option>
          <option value="3">Every week</option>
        </Select>
      </CardWrapperInput>
    </CardFormGroup>
  )
}

export default FormGroupToggleMonthly

const Select = styled.select`
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`
