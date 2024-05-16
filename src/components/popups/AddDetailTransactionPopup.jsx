import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardTitle from './Title'

import {
  CardFormGroup,
  CardWrapperInput,
  CardLabel,
  CardInput,
  Close,
  CardTextArea
} from './Card'

import Loader from '../UI/Loaders/loader'

import Toggle from '../UI/Toggles/Toggle'
import Button from '../UI/Button'
import FormGroupCategory from '../UI/Inputs/FormGroupCategory'
import Overlay from './Overlay'
import FormGroupTypeTransaction from '../UI/Inputs/FormGroupTypeTransaction'
import { addExpenseApi, getCategoriesAPI } from '../../api/Expenses'
import { useQuery, useQueryClient } from 'react-query'
import { useAddExpensePopups } from '../../stores/ctxPopupAddExpense'
import PopupAddCategory from './AddCategory'
import FormGroupToggleMonthly from '../UI/Inputs/FormGroupToggleMonthly'
import AmountInput from '../UI/Inputs/AmountInput'
import { mathCalculate } from '../UI/Inputs/AmountInput.logic'
import DeleteButton from '../UI/Buttons/DeleteButton'
import TrashIcon from '../../assets/icons/Trash.svg'

const AddDetailTransactionPopup = ({ refetchGetTotalTransactionApi }) => {
  console.log('refresh popup AddDetailTransactionPopup !')

  // const { showAddIncome } = useAddExpensePopups((state) => state.popups)
  const setShowAddIncome = useAddExpensePopups(
    (state) => state.setShowAddIncome
  )

  const clientQuery = useQueryClient()

  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date().toJSON().split('T')[0])
  const [category, setCategory] = useState(null)
  const [type, setType] = useState(null)
  const [note, setNote] = useState()
  const [monthly, setMonthly] = useState(false)
  const [period, setPeriod] = useState()

  const HandleSubmit = useCallback((e) => {
    e.preventDefault()
    refetch()
  }, [])

  let disabled = true
  if (
    amount !== '' &&
    date !== '' &&
    category !== '' &&
    type !== '' &&
    note !== ''
  ) {
    if (monthly !== '') {
      if (period !== '') {
        disabled = false
      }
      disabled = true
    }
    disabled = false
  }

  // active - inactive toggle button
  const onActive = useCallback(() => {
    setMonthly(true)
  }, [])

  const onInactive = useCallback(() => {
    setMonthly(false)
  }, [])

  // calculator Input function
  const handleCalculator = useCallback(
    (e) => {
      mathCalculate({ e, amount, setAmount })
    },
    [amount]
  )

  /* QUERIES */

  const { isFetching, isLoading, error, data, refetch } = useQuery(
    ['addIncomeAPI'],
    () =>
      addExpenseApi({
        amount,
        date,
        category,
        type,
        note,
        monthly,
        type_transaction: 2
      }),
    {
      enabled: false
    }
  )

  if (error) {
    console.error('ERROR => ', error.message)
  }

  if (data?.success === true) {
    clientQuery.resetQueries('addIncomeAPI').then(() => {
      alert('bien ajouté')
      setShowAddIncome(false)
      refetchGetTotalTransactionApi()
    })
  }

  // get categories from API
  const response = useQuery(['getCategoriesAPI'], () => getCategoriesAPI(2))

  if (response.error) {
    console.error('ERROR get categories => ', response.error)
  }

  let apiCategories = []
  if (response?.data?.success === true) {
    apiCategories = response?.data?.categories
    clientQuery.resetQueries('addCategoryAPI').then(() => {})
  }

  return (
    <>
      <Overlay />
      {/* POPUP add expense */}
      <Card className={'show'}>
        {/* close icon */}
        <Close onClick={() => setShowAddIncome(false)} />
        <CardTitle>Expense detail</CardTitle>
        <CardFormGroup>
          <CardLabel required={true}>Amount</CardLabel>
          <AmountInput
            type="text"
            value={amount}
            onKeyDown={handleCalculator}
          />
        </CardFormGroup>
        {/* select category input */}
        <FormGroupCategory
          category={category}
          setCategory={setCategory}
          data={apiCategories}
          type="income"
        />
        <CardFormGroup>
          <CardLabel required={true}>Date</CardLabel>
          <CardWrapperInput>
            <CardInput
              placeholder="DD/MM/YYYY"
              type="date"
              required
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </CardWrapperInput>
        </CardFormGroup>
        {/* select Type of transaction */}
        <FormGroupTypeTransaction type={type} setType={setType} />
        <CardFormGroup>
          <CardLabel required={false} optionalText={'( Optional )'}>
            Note
          </CardLabel>
          <CardWrapperInput>
            <CardTextArea
              rows={5}
              placeholder={'Add detail...'}
              onChange={(e) => setNote(e.target.value)}
            />
          </CardWrapperInput>
        </CardFormGroup>
        {/* toggle */}
        <Row>
          <RowLeft>
            <Question>Monthly recurring income?</Question>
            <Information>
              Add this expense each month automatically.
            </Information>
          </RowLeft>
          <RowRight>
            <Toggle onActive={onActive} onInactive={onInactive} />
          </RowRight>
        </Row>
        {monthly && (
          <FormGroupToggleMonthly onChange={(e) => setPeriod(e.target.value)} />
        )}
        {/* button */}
        <Row className="gap">
          <Button
            className="primary"
            disabled={disabled}
            onClick={HandleSubmit}
          >
            {(isLoading || isFetching) && <Loader />}
            Save changes
          </Button>
        </Row>
        {/* delete transaction */}
        <Row className="gap">
          <DeleteButton>
            <DeleteButton.Icon>
              <img src={TrashIcon} alt="trash icon" />
            </DeleteButton.Icon>
            <DeleteButton.Text>Delete this expense</DeleteButton.Text>
          </DeleteButton>
        </Row>
      </Card>

      {/* add category Popup */}
      <PopupAddCategory categories={apiCategories} type="income" />
    </>
  )
}

AddDetailTransactionPopup.propTypes = {
  refetchGetTotalTransactionApi: PropTypes.func
}

export default memo(AddDetailTransactionPopup)

const Information = styled.span`
  font-family: InterRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--light-black);
`
const Question = styled.span`
  font-family: InterSemiBold;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`
const RowRight = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
`
const RowLeft = styled.div`
  flex: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
  &.gap {
    gap: 12px;
  }
`

export const Card = styled.div`
  width: 494px;
  position: absolute;
  margin: auto;
  margin-top: 50px;
  inset: 0;
  height: fit-content;
  padding: 38px 48px;
  border-radius: 8px;
  background-color: var(--white);
  z-index: 2;
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`
