/* eslint-disable react/prop-types */
import React from 'react'

import styled, { css } from 'styled-components/macro'

import TransactionUp from '../assets/icons/TransactionUp.svg'
import TransactionDown from '../assets/icons/TransactionDown.svg'
import { useAddExpensePopups } from '../stores/ctxPopupAddExpense'

const PopUpAddTransation = ({ show }) => {
  console.log('refresh popup HERO - DROPDOWN!')
  const setShowAddExpense = useAddExpensePopups(
    (state) => state.setShowAddExpense
  )
  const setShowAddIncome = useAddExpensePopups(
    (state) => state.setShowAddIncome
  )

  return (
    <Container show={show}>
      <Row onClick={() => setShowAddExpense(true)}>
        <img src={TransactionUp} alt="up" />
        <span>add expense</span>
      </Row>
      <Row onClick={() => setShowAddIncome(true)}>
        <img src={TransactionDown} alt="down" />
        <span>add income</span>
      </Row>
    </Container>
  )
}

export default React.memo(PopUpAddTransation)

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #f1f1f1;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: all 0.3s;
  :hover {
    opacity: 0.7;
    transition: all 0.3s;
  }
  &:last-child {
    border: 0;
  }
  span {
    font-family: InterMedium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-blue);
    text-transform: capitalize;
    margin-left: 11px;
  }
`

const Container = styled.div`
  ${(props) =>
    props.show
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  flex-direction: column;
  position: absolute;
  top: 108px;
  right: 0;
  z-index: 2;
  padding: 0px 48px 0px 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  &:focus {
    outline: 0;
  }
`
