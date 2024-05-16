/* eslint-disable multiline-ternary */
import React, { useState, memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  CardFormGroup,
  CardInput,
  CardLabel,
  CardWrapperInput
} from '../../popups/Card'

import CaretDown from '../../../assets/category/CaretDown.svg'

const TYPES = [
  {
    id: 1,
    name: 'Personal',
    color: 'var(--green)'
  },
  {
    id: 2,
    name: 'Business',
    color: 'var(--purple)'
  }
]

const FormGroupTypeTransaction = ({ type, setType }) => {
  console.log('REFRESH FROM GROUP TRANSACTION TYPE !!!')

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const HandleClickType = (props) => {
    setType(props)
    toggleDropdown()
  }

  return (
    <CardFormGroup>
      <CardLabel required>Type</CardLabel>
      <CardWrapperInput onClick={toggleDropdown}>
        {!type ? (
          <CardInput
            placeholder="Select a Type"
            type="text"
            required
            // onFocus={!showDropdown ? toggleDropdown : null}
          />
        ) : (
          <TypeSelected>
            <Type bg={TYPES[type.id - 1]?.color}>
              {TYPES[type.id - 1]?.name}
            </Type>
          </TypeSelected>
        )}
        <img
          style={{ cursor: 'pointer' }}
          src={CaretDown}
          alt="carret down"
          onClick={toggleDropdown}
        />
      </CardWrapperInput>
      {/* DROPDOWN SELECT CATEGORY */}
      <WrapperCategory show={showDropdown}>
        <CategoryRow onClick={() => HandleClickType(TYPES[0])}>
          <CategoryRowName>Personal</CategoryRowName>
        </CategoryRow>
        <CategoryRow onClick={() => HandleClickType(TYPES[1])}>
          <CategoryRowName>Business</CategoryRowName>
        </CategoryRow>
      </WrapperCategory>
    </CardFormGroup>
  )
}

FormGroupTypeTransaction.propTypes = {
  type: PropTypes.any.isRequired,
  setType: PropTypes.func.isRequired
}

export default memo(FormGroupTypeTransaction)

const Type = styled.div`
  height: 39px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin: 0 8px 0 0;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ bg }) => bg || 'var(--green)'};
`
const TypeSelected = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0px;
`

const CategoryRowName = styled.span`
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`

const CategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 6px 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    background-color: var(--light-gray);
  }
`

const WrapperCategory = styled.div`
  width: 398px;
  /* height: 224px; */
  padding: 16px 0px 12px 0px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  overflow-y: scroll;
  position: absolute;
  z-index: 2;
  top: 100px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`
