/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState, memo } from 'react'
import styled from 'styled-components'

import {
  CardFormGroup,
  CardInput,
  CardLabel,
  CardWrapperInput
} from '../../popups/Card'

import { FiSearch } from 'react-icons/fi'
import CloseRow from '../../../assets/category/CloseRow.svg'
import AddNewCategory from '../../../assets/category/AddNewCategory.svg'
import { useAddExpensePopups } from '../../../stores/ctxPopupAddExpense'

const FormGroupCategory = memo(({ data, category, setCategory, type }) => {
  console.log('REFRESH FROM GROUP CATEGORY !!!')

  const setShowAddCategory = useAddExpensePopups(
    (state) => state.setShowAddCategory
  )
  const setShowAddExpense = useAddExpensePopups(
    (state) => state.setShowAddExpense
  )
  const setShowAddIncome = useAddExpensePopups(
    (state) => state.setShowAddIncome
  )

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const HandleClickCategory = (props) => {
    setCategory(props)
    toggleDropdown()
  }

  const handleClickAddCategory = () => {
    setShowAddCategory(true)
    if (type === 'expense') {
      setShowAddExpense(false)
    } else {
      setShowAddIncome(false)
    }
  }

  return (
    <CardFormGroup>
      <CardLabel required>Category</CardLabel>
      <CardWrapperInput>
        {!category ? (
          <>
            <CardInput
              placeholder="Select a Category"
              type="text"
              required
              onFocus={!showDropdown ? toggleDropdown : null}
            />
            <FiSearch size={19} />
          </>
        ) : (
          <CategorySelected>
            <CategorySelectedLeft>
              <CategorySelectedIcon
                src={category?.icon}
                alt={'icon category'}
              />
              <CategorySelectedName>{category?.name}</CategorySelectedName>
            </CategorySelectedLeft>
            <CloseIcon
              src={CloseRow}
              alt="close row"
              onClick={() => HandleClickCategory(null)}
            />
          </CategorySelected>
        )}
      </CardWrapperInput>
      {/* DROPDOWN SELECT CATEGORY */}
      <WrapperCategory show={showDropdown}>
        {data.map((el) => {
          return (
            <CategoryRow
              key={'cat_' + el.id}
              onClick={() =>
                HandleClickCategory({
                  id: el.id,
                  name: el.name,
                  icon: el.name_icon
                })
              }
            >
              <CategoryRowIcon src={el.name_icon} alt={'icon category'} />
              <CategoryRowName>{el.name}</CategoryRowName>
            </CategoryRow>
          )
        })}
        {/* add category */}
        <CategoryRow key={0} onClick={handleClickAddCategory}>
          <CategoryRowIcon src={AddNewCategory} alt={'add category icon'} />
          <CategoryRowName>Add new category</CategoryRowName>
        </CategoryRow>
      </WrapperCategory>
    </CardFormGroup>
  )
})

export default FormGroupCategory

const CloseIcon = styled.img`
  cursor: pointer;
`

const CategorySelectedName = styled.span`
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`
const CategorySelectedIcon = styled.img`
  width: 38px;
  height: 38px;
`
const CategorySelectedLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`
const CategorySelected = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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
const CategoryRowIcon = styled.img`
  width: 38px;
  height: 38px;
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
  max-height: 224px;
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
