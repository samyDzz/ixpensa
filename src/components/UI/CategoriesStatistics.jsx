import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Categories from '../../assets/category/Categories.svg'
import { showSignTransactionWidthCurrency } from '../../utils/UtilCurrencies'
import Progressbar from './Progressbar'

const CategoriesStatistics = ({ data = [], total = 0 }) => {
  const percentAmount = (amount, total) => {
    if (!total) {
      return false
    }
    return Math.abs(Math.round((amount * 100) / total)) + '%'
  }
  return (
    <WrapperCategory>
      {/* ligne */}
      {data.map((el) => {
        return (
          <Row key={el.id_transaction}>
            <RowIcon src={Categories} alt="youtube" />
            <RowInfos>
              <RowInfosWrapper>
                <RowCategory>
                  Shopping <span>{percentAmount(el.amount, total)}</span>
                </RowCategory>
                <RowCategoryCost>
                  {showSignTransactionWidthCurrency(
                    el.type_transaction,
                    el.amount
                  )}
                </RowCategoryCost>
              </RowInfosWrapper>
              <Progressbar width={percentAmount(el.amount, total)} />
            </RowInfos>
          </Row>
        )
      })}
    </WrapperCategory>
  )
}

CategoriesStatistics.defaultProps = {
  data: [],
  total: 0
}
CategoriesStatistics.propTypes = {
  data: PropTypes.array,
  total: PropTypes.number
}

export default CategoriesStatistics

const RowCategoryCost = styled.span`
  font-family: InterRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: right;
  color: var(--dark-blue);
`
const RowCategory = styled.span`
  font-family: InterMedium;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: var(--dark-blue);
  span {
    font-family: InterLight;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: var(--light-black);
  }
`

const RowInfosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const RowInfos = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex: 1;
`
const RowIcon = styled.img`
  width: 38px;
  height: 38px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`
const WrapperCategory = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
