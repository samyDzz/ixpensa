import React from 'react'
import styled from 'styled-components/macro'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import LeftMenuSettings from '../../components/Menus/LeftMenuSettings'

const Settings = () => {
  return (
    <>
      <Header />
      <Row>
        <LeftMenuSettings />
        <Right>
          <Outlet />
        </Right>
      </Row>
    </>
  )
}

export default Settings

const Right = styled.div`
  display: flex;
  flex: 9;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  min-height: 100%;
  padding: 45px;
  background-color: var(--light-gray);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`
