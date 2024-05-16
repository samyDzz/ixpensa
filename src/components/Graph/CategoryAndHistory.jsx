import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components/macro'
import { getTransactionsByMonths } from '../../api/Expenses'

import DoughnutCharts from '../../components/Graph/DoughnutCharts'
import { MONTHS } from '../../utils/Constants'
import { showSignTransactionWidthCurrency } from '../../utils/UtilCurrencies'

import CategoriesStatistics from '../UI/CategoriesStatistics'

const CategoryAndHistory = () => {
  const getRightDate = (date) => {
    const newDate = new Date(date)
    return MONTHS[newDate.getMonth() + 1] + ', ' + newDate.getFullYear()
  }

  /**
   * Queries
   */
  let datas = []
  const response = useQuery(['getMonthTransactionAPI'], () =>
    getTransactionsByMonths()
  )

  if (response.error) {
    console.error('ERROR get categories => ', response.error)
  }

  if (response?.data?.success === true) {
    datas = response?.data?.data
    // clientQuery.resetQueries('addCategoryAPI').then(() => {})
  }

  return (
    <Container>
      <div className="flex2h"></div>
      <Center>
        <CenterLeft>
          <LeftHeader>
            <LeftTitle>Category</LeftTitle>
            <LeftGroupFilter>
              <LeftWrapperType>
                <option value="">Expense</option>
              </LeftWrapperType>
              <LeftWrapperTime>
                <option value="">This week</option>
              </LeftWrapperTime>
            </LeftGroupFilter>
          </LeftHeader>
          <LeftGraph>
            <WrapperDoughnut>
              <DoughnutCharts />
            </WrapperDoughnut>
          </LeftGraph>
          {/* show all categories with statistics */}
          <CategoriesStatistics />
        </CenterLeft>
        <CenterRight>
          <CenterRightHeader>
            <Column className="head" flex="1">
              Date
            </Column>
            <Column className="head" flex="1" jc="end">
              Expense
            </Column>
            <Column className="head" flex="1" jc="end">
              Income
            </Column>
            <Column className="head" flex="1" jc="end">
              Balance
            </Column>
          </CenterRightHeader>
          {datas.map((el) => {
            const expense = showSignTransactionWidthCurrency(
              1,
              el.expense_amount
            )
            const income = showSignTransactionWidthCurrency(2, el.income_amount)
            const total = showSignTransactionWidthCurrency(
              null,
              el.income_amount - el.expense_amount
            )
            return (
              <CenterRightRow key={el.id}>
                <Column flex="1">{getRightDate(el.date)}</Column>
                <Column flex="1" jc="end">
                  {expense}
                </Column>
                <Column flex="1" jc="end">
                  {income}
                </Column>
                <Column
                  flex="1"
                  jc="end"
                  className={total.includes('-') ? 'expense' : 'income'}
                >
                  {total}
                </Column>
              </CenterRightRow>
            )
          })}
        </CenterRight>
      </Center>
      <div className="flex2h"></div>
    </Container>
  )
}

export default CategoryAndHistory

const Column = styled.span`
  display: flex;
  flex: ${({ flex }) => flex || 1};
  justify-content: ${({ jc }) => (jc ? 'flex-' + jc : 'flex-start')};
  &.expense {
    font-family: InterSemiBold;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: var(--dark-blue);
  }
  &.income {
    font-family: InterSemiBold;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: var(--blue);
  }
  &.head {
    font-family: InterMedium;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: var(--ligh-black);
  }
`
const CenterRightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px 16px 16px;
  border-radius: 8px;
`
const CenterRightHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px 16px 16px;
  border-radius: 8px;
  background-color: var(--light-gray);
`

const CenterRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  border-radius: 8px;
  height: fit-content;
`

const WrapperDoughnut = styled.div`
  width: 243px;
  margin: 0 auto;
  position: relative;
`

const LeftGraph = styled.div`
  margin-top: 25px;
`

const LeftWrapperTime = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  outline: 0;
  cursor: pointer;
`
const LeftWrapperType = styled.select`
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  padding: 8px;
  outline: 0;
  cursor: pointer;
`
const LeftGroupFilter = styled.div`
  display: flex;
  gap: 12px;
`
const LeftTitle = styled.span`
  font-family: InterSemiBold;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: 0.25px;
  color: var(--dark-blue);
`
const LeftHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CenterLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 28px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  border-radius: 8px;
`

const Center = styled.div`
  display: flex;
  flex: 8;
  background-color: var(--white);
  gap: 12px;
  justify-content: space-between;
  margin-bottom: 200px;
`

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 28px;
  .flex2h {
    display: flex;
    flex: 2;
  }
`
