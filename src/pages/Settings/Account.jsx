import React from 'react'
import styled from 'styled-components/macro'
import { Outlet } from 'react-router-dom'

import Header from '../../components/UI/Cards/Header'
import NavAccountSettings from './TabSettings/NavAccountSettings'

const Account = () => {
  return (
    <Card>
      <Header title={'Account settings'} border={false} />
      <NavAccountSettings />
      <CardBody>
        <Outlet />
      </CardBody>
    </Card>
  )
}

export default Account

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 140px;
  padding-top: 37px;
  /* padding-bottom: 28px; */
`

const Card = styled.div`
  width: 682px;
  height: fit-content;
  padding-top: 24px;
  border-radius: 8px;
  background-color: var(--white);
`
