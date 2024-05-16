import React, { memo, useState } from 'react'
import styled from 'styled-components/macro'
import { useQuery } from 'react-query'
import { useAddExpensePopups } from '../stores/ctxPopupAddExpense'
import { useDailyDetail } from '../stores/DailyDetail.store'
import { getTransactionsAPI } from '../api/Expenses'

import DailyDetail from './popups/DailyDetail'
import { showSignTransactionWidthCurrency } from '../utils/UtilCurrencies'
import Categories from '../assets/category/Categories.svg'
import Loader, { WrapperLoader } from './UI/Loaders/loader'
import EmptyExpense from './EmptyExpense/EmptyExpense'
import { formatTransaction } from './EmptyExpense/EmptyExpense.logic'
import { AnimatePresence } from 'framer-motion'

const Expenses = () => {
  console.log('refresh Expenses !')

  const [detailTransaction, setDetailTransaction] = useState(null)
  const show = useDailyDetail((state) => state.show)
  const toggleShowDailyDetail = useDailyDetail(
    (state) => state.toggleShowDailyDetail
  )
  // popup add expense
  // const { showAddExpense } = useAddExpensePopups((state) => state.popups)
  const setShowAddExpense = useAddExpensePopups(
    (state) => state.setShowAddExpense
  )
  const setShowAddIncome = useAddExpensePopups(
    (state) => state.setShowAddIncome
  )
  const setDataAddExpense = useAddExpensePopups(
    (state) => state.setDataAddExpense
  )
  const setDataAddIncome = useAddExpensePopups(
    (state) => state.setDataAddIncome
  )

  /**
   * FUNCTIONS
   */
  const showPopupTransactionDetail = (el) => {
    if (el.type_transaction === 2) {
      setDataAddExpense({})
      setDataAddIncome(el)
      setShowAddIncome(true)
      setShowAddExpense(false)
    } else {
      setDataAddExpense(el)
      setDataAddIncome({})
      setShowAddIncome(false)
      setShowAddExpense(true)
    }
  }

  /**
   * React Query api
   */
  let transactions = []
  const { isLoading, isFetching, error, data } = useQuery(
    ['getExpensesAPI'],
    () => getTransactionsAPI()
  )

  if (error) {
    console.error('ERROR => ', error.message)
  }

  let refactorTransactions = []
  if (data?.success === true) {
    transactions = data.transactions
    refactorTransactions = formatTransaction(transactions)
  }

  return (
    <>
      {/* daily detail slide from the right */}
      <AnimatePresence>
        {show && <DailyDetail detailTransaction={detailTransaction} />}
      </AnimatePresence>
      {/* SECTION Transactions */}
      <Container>
        <div className="flex2h"></div>
        <Center>
          {(isLoading || isFetching) && (
            <WrapperLoader>
              <Loader color={'var(--blue)'} size={40} />
            </WrapperLoader>
          )}
          {!transactions.length && !isLoading && <EmptyExpense />}

          {refactorTransactions.map((el, i) => {
            let header = null
            // verifier si la nouvelle Date est differente de l'ancienne Date.
            if (el.header.date) {
              // on affiche le header.
              header = (
                <SectionTitle
                  onClick={() => {
                    toggleShowDailyDetail(true)
                    setDetailTransaction(el)
                  }}
                >
                  <SectionTitleLeft>
                    <SectionTitleLeftText>
                      {el.header.date}
                    </SectionTitleLeftText>
                  </SectionTitleLeft>
                  <SectionTitleRight>
                    <SectionTitleRightExpense>
                      Expense :{' '}
                      {showSignTransactionWidthCurrency(
                        1,
                        el.header.total_expenses
                      )}
                    </SectionTitleRightExpense>
                    <SectionTitleRightIncome>
                      Income :{' '}
                      {showSignTransactionWidthCurrency(
                        2,
                        el.header.total_incomes
                      )}
                    </SectionTitleRightIncome>
                  </SectionTitleRight>
                </SectionTitle>
              )
            }

            return (
              <Section key={i}>
                {header}
                {el.transactions.map((el, j) => {
                  return (
                    <SectionBody
                      key={j}
                      onClick={() => showPopupTransactionDetail(el)}
                    >
                      <SectionRow>
                        <SectionRowLeft>
                          <SectionRowLeftImage>
                            <img src={Categories} alt="Categories icon" />
                          </SectionRowLeftImage>
                          <SectionRowLeftInfos>
                            <SectionRowLeftInfosCategory>
                              {el.name_category}
                            </SectionRowLeftInfosCategory>
                            <SectionRowLeftInfosDescription>
                              {el.note}
                            </SectionRowLeftInfosDescription>
                          </SectionRowLeftInfos>
                        </SectionRowLeft>
                        <SectionRowRight>
                          <Price blue={el.type_transaction === 2}>
                            {showSignTransactionWidthCurrency(
                              el.type_transaction,
                              el.amount
                            )}
                          </Price>
                          <PersonalOrBusiness>
                            {el.type === 1 ? 'Personal' : 'Business'}
                          </PersonalOrBusiness>
                        </SectionRowRight>
                      </SectionRow>
                    </SectionBody>
                  )
                })}
              </Section>
            )
          })}
        </Center>
        <div className="flex2h"></div>
      </Container>
    </>
  )
}

export default memo(Expenses)
const PersonalOrBusiness = styled.span`
  font-family: InterRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(52, 58, 63, 0.5);
`

const Price = styled.span`
  font-family: InterSemiBold;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: ${({ blue }) => (blue ? 'var(--blue)' : 'var(--dark-blue)')};
`
const SectionRowRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const SectionRowLeftInfosDescription = styled.div`
  font-family: InterRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(52, 58, 63, 0.5);
`
const SectionRowLeftInfosCategory = styled.div`
  font-family: InterSemiBold;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark-blue);
`
const SectionRowLeftInfos = styled.div``
const SectionRowLeftImage = styled.div`
  display: flex;
`
const SectionRowLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`
const SectionRow = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: var(--white);
  border-bottom: 1px dashed var(--blue-gray);
`
const SectionBody = styled.div``

const SectionTitleRightIncome = styled.span`
  font-family: InterMedium;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: var(--black);
`
const SectionTitleRightExpense = styled(SectionTitleRightIncome)``
const SectionTitleRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
`
const SectionTitleLeftText = styled.span`
  font-family: InterMedium;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--black);
`
const SectionTitleLeft = styled.div``
const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: var(--light-gray);
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s;
  }
`
const Section = styled.div`
  margin-bottom: 28px;
`

const Center = styled.div`
  display: flex;
  flex: 8;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 130px;
  position: relative;
`

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding-top: 24px;
  padding-bottom: 16px;
  .flex2h {
    display: flex;
    flex: 2;
  }
`
