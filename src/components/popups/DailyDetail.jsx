import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Overlay from './Overlay'

import IconClose from '../../assets/icons/popup/close.svg'
import { useDailyDetail } from '../../stores/DailyDetail.store'
import DoughnutCharts from '../Graph/DoughnutCharts'
import CategoriesStatistics from '../UI/CategoriesStatistics'

import { motion } from 'framer-motion'
import moment from 'moment'
import { showSignTransactionWidthCurrency } from '../../utils/UtilCurrencies'

const DailyDetail = ({ detailTransaction }) => {
  const show = useDailyDetail((state) => state.show)
  const toggleShowDailyDetail = useDailyDetail(
    (state) => state.toggleShowDailyDetail
  )

  // filter here.
  const [filter, setFilter] = useState('0') // 0 - expense, 1- income

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  const Close = () => {
    toggleShowDailyDetail(false)
  }

  let total = 0
  let typeTransaction
  let arr = []
  if (filter === '1') {
    total = detailTransaction.header.total_incomes
    typeTransaction = 2
    arr = detailTransaction.transactions.filter(
      (el) => el.type_transaction === 2
    )
  } else {
    total = detailTransaction.header.total_expenses
    typeTransaction = 1
    arr = detailTransaction.transactions.filter(
      (el) => el.type_transaction === 1
    )
  }

  return (
    <WrapperStyle>
      <Overlay onClick={Close} />
      <Container
        initial={{
          x: '500px'
        }}
        animate={{
          x: 0
        }}
        transition={{
          stiffness: 'spring'
        }}
        exit={{
          x: '500px'
        }}
      >
        <CloseIcon src={IconClose} alt="Close icon" onClick={Close} />
        <Row>
          <RowLeft>
            <LeftDay>DAY</LeftDay>
            <LeftDate>
              {moment(detailTransaction.header.date).format('LL')}
            </LeftDate>
          </RowLeft>
          <RowRight>
            <RightExpenseSelect onChange={(e) => setFilter(e.target.value)}>
              <option value="0">Expense</option>
              <option value="1">Income</option>
            </RightExpenseSelect>
          </RowRight>
        </Row>
        <WrapperGraph>
          <DoughnutCharts
            circumference={180}
            rotation={-90}
            cutout={105}
            radius={120}
            total={showSignTransactionWidthCurrency(typeTransaction, total)}
          />
        </WrapperGraph>
        <CategoriesStatistics data={arr} total={total} />
      </Container>
    </WrapperStyle>
  )
}

DailyDetail.propTypes = {
  detailTransaction: PropTypes.object
}

export default DailyDetail

const WrapperGraph = styled.div`
  display: flex;
  justify-content: center;
  canvas {
    width: 240px !important;
    display: flex;
  }
`

const RightExpenseSelect = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  cursor: pointer;
  &:focus {
    outline-color: var(--outline-color);
    outline-width: var(--outline-width);
  }
`
const RowRight = styled.div``
const LeftDate = styled.span`
  font-family: InterSemiBold;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`
const LeftDay = styled.span`
  font-family: InterRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--blue-gray);
`
const RowLeft = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
`

const CloseIcon = styled.img`
  position: absolute;
  top: 38px;
  right: 38px;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`

const Container = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 500px;
  height: 100%;
  padding: 76px;
  background-color: var(--white);
  overflow-y: auto;
  z-index: 3;
`

const WrapperStyle = styled(motion.div)`
  position: relative;
  display: flex;
`
