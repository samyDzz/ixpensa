/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React, { memo, useCallback, useState } from 'react'
import styled from 'styled-components'
import { useQuery, useQueryClient } from 'react-query'
import CardTitle from './Title'
import IconTrash from '../../assets/icons/Trash.svg'

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
import SimpleButton from '../UI/Buttons/SimpleButton'
import FormGroupCategory from '../UI/Inputs/FormGroupCategory'
import Overlay from './Overlay'
import FormGroupTypeTransaction from '../UI/Inputs/FormGroupTypeTransaction'
import { addExpenseApi, getCategoriesAPI } from '../../api/Expenses'
import { useAddExpensePopups } from '../../stores/ctxPopupAddExpense'
import PopupAddCategory from './AddCategory'
import FormGroupToggleMonthly from '../UI/Inputs/FormGroupToggleMonthly'
import AmountInput from '../UI/Inputs/AmountInput'
import { mathCalculate } from '../UI/Inputs/AmountInput.logic'

const AddExpensePopup = ({ refetchGetTotalTransactionApi }) => {
  console.log('refresh popup AddExpensePopup !')

  /**
   * STORES
   */
  const setShowAddExpense = useAddExpensePopups(
    (state) => state.setShowAddExpense
  )
  const setIdTransactionDelete = useAddExpensePopups(
    (state) => state.setIdTransactionDelete
  )
  const { showAddExpense } = useAddExpensePopups((state) => state.popups)
  const setDataAddExpense = useAddExpensePopups(
    (state) => state.setDataAddExpense
  )
  const setShowDeleteTransaction = useAddExpensePopups(
    (state) => state.setShowDeleteTransaction
  )
  const dataExpense = useAddExpensePopups((state) => state.data.addExpense)

  const clientQuery = useQueryClient()

  /**
   * STATES
   */

  const [amount, setAmount] = useState(dataExpense?.amount || '')
  const [date, setDate] = useState(
    dataExpense?.date || new Date().toJSON().split('T')[0]
  ) // format 2022-04-29
  const [category, setCategory] = useState(
    dataExpense?.id_category
      ? {
          id: dataExpense?.id_category,
          icon: dataExpense?.icon,
          name: dataExpense?.name_category
        }
      : null
  )
  const [type, setType] = useState(
    dataExpense?.type ? { id: dataExpense?.type } : null
  )
  const [note, setNote] = useState(dataExpense?.note || null)
  const [monthly, setMonthly] = useState(dataExpense?.reccuring || false)
  const [period, setPeriod] = useState()

  /**
   * FUNCTIONS
   */
  // show delete expense
  const _handleDeleteExpense = (id) => {
    setIdTransactionDelete(id)
    setShowAddExpense(false)
    setShowDeleteTransaction(true)
  }

  // submit form.
  const HandleSubmit = (e) => {
    e.preventDefault()
    refetch()
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
  const CloseModal = () => {
    setShowAddExpense(false)
    setDataAddExpense({})
  }

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

  /**
   * QUERIES
   */
  const { isFetching, isLoading, error, data, refetch } = useQuery(
    ['addExpenseAPI'],
    () =>
      addExpenseApi({
        amount,
        date,
        category,
        type,
        note,
        monthly,
        type_transaction: 1
      }),
    {
      enabled: false
    }
  )

  if (error) {
    console.error('ERROR => ', error.message)
  }

  if (data?.success === true) {
    clientQuery.resetQueries('addExpenseAPI').then(() => {
      alert('bien ajouté')
      setShowAddExpense(false)
      refetchGetTotalTransactionApi()
    })
  }

  // get categories from API
  const response = useQuery(['getCategoriesAPI'], () => getCategoriesAPI(1))

  if (response.error) {
    console.error('ERROR get categories => ', error.message)
  }

  let apiCategories = []
  if (response?.data?.success === true) {
    apiCategories = response?.data?.categories
    clientQuery.resetQueries('addCategoryAPI').then(() => {})
  }

  /**
   * RENDER
   */

  return (
    <>
      <Overlay />
      {/* POPUP add expense */}
      <Card className={showAddExpense ? 'show' : 'hide'}>
        {/* close icon */}
        <Close onClick={CloseModal} />
        <CardTitle>Add expense</CardTitle>
        <CardFormGroup>
          <CardLabel required={true}>Amount</CardLabel>
          <AmountInput
            onKeyDown={handleCalculator}
            type="text"
            value={amount}
          />
        </CardFormGroup>
        {/* select category input */}
        <FormGroupCategory
          category={category}
          setCategory={setCategory}
          data={apiCategories}
          type="expense"
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
              value={note}
            />
          </CardWrapperInput>
        </CardFormGroup>
        {/* toggle */}
        <Row>
          <RowLeft>
            <Question>Monthly recurring expense?</Question>
            <Information>
              Add this expense each month automatically.
            </Information>
          </RowLeft>
          <RowRight>
            <Toggle
              isActivated={monthly}
              onActive={onActive}
              onInactive={onInactive}
            />
          </RowRight>
        </Row>
        {monthly && (
          <FormGroupToggleMonthly onChange={(e) => setPeriod(e.target.value)} />
        )}
        {/* show buttons save when its update */}
        {dataExpense?.amount ? (
          <div style={{ marginTop: 18 }}>
            <SimpleButton
              text={'Save changes'}
              width="100%"
              padding="19px 28px"
              color={'white'}
              bg={'var(--blue)'}
              disabled
            />
            <SimpleButton
              text={'Delete this expense'}
              width="100%"
              padding="19px 28px"
              color={'var(--red)'}
              bg={'transparent'}
              onClick={() => _handleDeleteExpense(dataExpense?.id_transaction)}
              icon={{
                src: IconTrash,
                alt: 'trash icon'
              }}
            />
          </div>
        ) : (
          <>
            {/* button */}
            <Row className="gap">
              <Button className="info" onClick={() => setShowAddExpense(false)}>
                Cancel
              </Button>
              <Button
                className="danger"
                disabled={disabled}
                onClick={HandleSubmit}
              >
                {(isLoading || isFetching) && <Loader />}
                Add expense
              </Button>
            </Row>
          </>
        )}
      </Card>

      {/* add category Popup */}
      <PopupAddCategory categories={apiCategories} type="expense" />
    </>
  )
}

export default memo(AddExpensePopup)

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
