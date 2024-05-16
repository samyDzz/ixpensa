/* eslint-disable multiline-ternary */
import React, { memo, useState } from 'react'
import { useQuery } from 'react-query'

import PopUpAddTransation from '../PopUpAddTransation'

import CalendarIcon from '../../assets/icons/CalendarBlank.svg'
import UpIcon from '../../assets/icons/upIcon.svg'
import AddExpensePopup from '../popups/AddExpensePopup'

import {
  Container,
  Left,
  WrapperDate,
  TotalBalance,
  Balance,
  WrapperExpenseAndBalance,
  Expense,
  ExpenseTitle,
  ExpenseTotale,
  Incomes,
  IncomesTitle,
  IncomesTotale,
  Right,
  WrapperButton,
  ButtonLeft,
  ButtonRight
} from './Hero.styles'

import { useAddExpensePopups } from '../../stores/ctxPopupAddExpense'
import AddIncomePopup from '../popups/AddIncomePopup'
import { getTotalTransactionAPI } from '../../api/Expenses'

import Loader from '../UI/Loaders/loader'
import { showSignTransactionWidthCurrency } from '../../utils/UtilCurrencies'
import DeleteTransactionPopup from '../popups/DeleteTransactionPopup'
// import AddDetailTransactionPopup from '../popups/AddDetailTransactionPopup'

const Hero = () => {
  console.log('refresh popup HERO !')

  const [showPopupTransaction, setShowPopupTransaction] = useState(false)
  // with context method!
  const { showAddExpense, showAddCategory } = useAddExpensePopups(
    (state) => state.popups
  )
  const { showAddIncome } = useAddExpensePopups((state) => state.popups)
  const { showDeleteTransaction } = useAddExpensePopups((state) => state.popups)

  /**
   *  QUERY
   */
  const {
    isLoading,
    isFetching,
    error,
    data,
    refetch: refetchGetTotalTransactionApi
  } = useQuery(['getTotalTransactionAPI'], () => getTotalTransactionAPI(), {
    staleTime: 2 * 60 * 1000 // 2 minutes.
  })

  if (error) {
    console.error('ERROR => ', error.message)
  }

  if (data?.success === true) {
    console.log('SUCCESS => ', data)
  }

  return (
    <>
      <Container>
        <div className="flex2h"></div>
        <Left>
          <WrapperDate>
            <img src={CalendarIcon} alt="IconCalendar" />
            <span>
              {isLoading || isFetching ? (
                <Loader size={24} color={'var(--black)'} />
              ) : (
                data.totals.date
              )}
            </span>
          </WrapperDate>
          <TotalBalance>total balance</TotalBalance>
          <Balance>
            {isLoading || isFetching ? (
              <Loader size={24} color={'var(--black)'} />
            ) : (
              showSignTransactionWidthCurrency(
                null,
                data.totals.income - data.totals.expense
              )
            )}
          </Balance>
          <WrapperExpenseAndBalance>
            <Expense>
              <ExpenseTitle>expenses</ExpenseTitle>
              <ExpenseTotale>
                {isLoading || isFetching ? (
                  <Loader size={24} color={'var(--black)'} />
                ) : (
                  showSignTransactionWidthCurrency(1, data.totals.expense)
                )}
              </ExpenseTotale>
            </Expense>
            <Incomes>
              <IncomesTitle>income</IncomesTitle>
              <IncomesTotale>
                {isLoading || isFetching ? (
                  <Loader size={24} color={'var(--black)'} />
                ) : (
                  showSignTransactionWidthCurrency(2, data.totals.income)
                )}
              </IncomesTotale>
            </Incomes>
          </WrapperExpenseAndBalance>
        </Left>
        <Right>
          <div
            onMouseEnter={() => setShowPopupTransaction(true)}
            onMouseLeave={() => setShowPopupTransaction(false)}
            style={{
              paddingBottom: '8px'
            }}
          >
            <WrapperButton>
              <ButtonLeft>
                <span>+</span>
                <span>add transaction</span>
              </ButtonLeft>
              <ButtonRight show={showPopupTransaction}>
                <div>
                  <img src={UpIcon} alt="up arrow" />
                </div>
              </ButtonRight>
            </WrapperButton>
            <PopUpAddTransation show={showPopupTransaction} />
          </div>
        </Right>
        <div className="flex2h"></div>
      </Container>
      {/* <AddDetailTransactionPopup
        refetchGetTotalTransactionApi={refetchGetTotalTransactionApi}
      /> */}
      {/* REMOVE TRANSACTION POPUP */}
      {showDeleteTransaction && <DeleteTransactionPopup />}
      {/* popup add expense */}
      {showAddExpense && (
        <AddExpensePopup
          refetchGetTotalTransactionApi={refetchGetTotalTransactionApi}
        />
      )}
      {(showAddIncome || showAddCategory) && (
        <AddIncomePopup
          refetchGetTotalTransactionApi={refetchGetTotalTransactionApi}
        />
      )}
    </>
  )
}

export default memo(Hero)
