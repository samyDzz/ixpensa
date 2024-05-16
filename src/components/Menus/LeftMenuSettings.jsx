import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Profile from '../../assets/icons/Profile.svg'
import Billing from '../../assets/icons/Billing.svg'
import LastUpdate from '../../assets/icons/LastUpdate.svg'
import Support from '../../assets/icons/Support.svg'
import ReferFriend from '../../assets/icons/ReferFriend.svg'
import Logout from '../../assets/icons/Logout.svg'

import { useUserStore } from '../../stores/Auth.store'

const LeftMenuSettings = () => {
  const { setUser } = useUserStore()
  return (
    <Container>
      <Row to={'account'}>
        <RowIcon src={Profile} alt="profile icon" />
        <RowText>Account settings</RowText>
      </Row>
      <Row to={'billing'}>
        <RowIcon src={Billing} alt="Billing icon" />
        <RowText>Billing</RowText>
      </Row>
      <Row to={'lastUpdate'}>
        <RowIcon src={LastUpdate} alt="LastUpdate icon" />
        <RowText>LastUpdate</RowText>
      </Row>
      <Row to={'Help'}>
        <RowIcon src={Support} alt="Support icon" />
        <RowText>Support</RowText>
      </Row>
      <Row to={'Refer'}>
        <RowIcon src={ReferFriend} alt="ReferFriend icon" />
        <RowText>ReferFriend</RowText>
      </Row>
      <Row
        to={'/logout'}
        onClick={(e) => {
          setUser(false)
        }}
      >
        <RowIcon red={true} src={Logout} alt="Logout icon" />
        <RowText red={true}>Logout</RowText>
      </Row>
    </Container>
  )
}

export default LeftMenuSettings

const RowText = styled.span`
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark-blue);
  ${(props) =>
    props.red &&
    css`
      color: var(--red);
    `}
`
const RowIcon = styled.img`
  width: 28px;
  height: 28px;
`
const Row = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 16px 32px 16px 16px;
  text-decoration: none;
  transition: all 0.2s;
  width: 100%;
  :hover {
    padding: 16px 32px 16px 16px;
    border-radius: 8px;
    background-color: var(--blue);
    span {
      color: white;
    }
  }
  &.active {
    padding: 16px 32px 16px 16px;
    border-radius: 8px;
    background-color: var(--blue);
    span {
      color: white;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex: 2;
  gap: 10px;
  flex-direction: column;
  padding: 48px 14px 30px 31px;
  background-color: var(--white);
`
