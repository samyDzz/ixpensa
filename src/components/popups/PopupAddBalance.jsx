import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SimpleButton from '../UI/Buttons/SimpleButton'
import {
  CardFormGroup,
  CardInput,
  CardLabel,
  CardSelect,
  CardWrapperInput
} from './Card'
import Overlay from './Overlay'

import { getCurrencies } from '../../api/getters'
import { useQueryAddBalance } from '../../api/queries'

const PopupAddBalance = ({ onClickOverlay }) => {
  const [CURRENCIES, setCurrencies] = useState([])
  const [currency, setCurrency] = useState()
  const [balance, setBalance] = useState()
  const [disabled, setDisabled] = useState(true)

  // affect button opacity ( disabled or not )
  useEffect(() => {
    if (currency && balance) {
      setDisabled(false)
    }
  }, [currency, balance])

  // get all currencies
  useEffect(() => {
    // eslint-disable-next-line space-before-function-paren
    ;(async () => {
      const curr = await getCurrencies()
      setCurrencies(curr.currencies)
    })()
  }, [])

  const HandleSubmit = (e) => {
    e.preventDefault()
    mutateAsync()
  }

  const { isFetching, isLoading, mutateAsync } = useQueryAddBalance({
    currency,
    balance,
    CURRENCIES
  })

  return (
    <>
      <Overlay onClick={onClickOverlay} />
      <Container>
        <Title>Add currency {'&'} balance</Title>
        <CardFormGroup>
          <CardLabel required={true}>Currency</CardLabel>
          <CardWrapperInput>
            <CardSelect
              firstItem="Add your category"
              data={CURRENCIES}
              keys={{
                id: 'id_currency',
                name: 'currency',
                extra: 'alphabetic_code'
              }}
              onChange={(e) => {
                e.preventDefault()
                setCurrency(e.target.value)
              }}
              value={currency}
              itemSelected={currency}
              required
            />
          </CardWrapperInput>
        </CardFormGroup>
        <CardFormGroup>
          <CardLabel required={false}>Primary Balance</CardLabel>
          <CardWrapperInput>
            <CardInput
              placeholder="000.00"
              type="number"
              onChange={(e) => setBalance(e.target.value)}
              required
            />
          </CardWrapperInput>
        </CardFormGroup>
        <SimpleButton
          bg="var(--blue)"
          color="var(--white)"
          text="Continue"
          marginTop={28}
          padding="20px 0px"
          disabled={disabled}
          onClick={HandleSubmit}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </Container>
    </>
  )
}

PopupAddBalance.propTypes = {
  onClickOverlay: PropTypes.func
}

export default PopupAddBalance

const Title = styled.span`
  font-family: InterSemiBold;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  width: 100%;
  color: var(--dark-blue);
  margin-bottom: 35px;
`

const Container = styled.div`
  z-index: 4;
  width: 580px;
  height: fit-content;
  padding: 38px 91px 28px;
  border-radius: 8px;
  background-color: var(--white);

  position: fixed;
  inset: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
`
