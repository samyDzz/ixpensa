/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import styled, { css } from 'styled-components'

import Profile from '../assets/icons/Profile.svg'
import Upgrade from '../assets/icons/Upgrade.svg'
import LastUpdate from '../assets/icons/LastUpdate.svg'
import Support from '../assets/icons/Support.svg'
import Moon from '../assets/icons/Moon.svg'
import ReferFriend from '../assets/icons/ReferFriend.svg'
import Logout from '../assets/icons/Logout.svg'
import Toggle from '../components/UI/Toggles/Toggle'
import { useUserStore } from '../stores/Auth.store'
import { NavLink } from 'react-router-dom'
import { ThemeStore } from '../stores/Theme.store'

const DropdownMenu = ({ dropdown }) => {
  const URL = '/settings'
  const { setUser } = useUserStore()
  // const { activateDarkMode, disactivateDarkMode } = ThemeStore();

  const activateDarkMode = ThemeStore((state) => state.activateDarkMode)
  const disactivateDarkMode = ThemeStore((state) => state.disactivateDarkMode)
  const theme = ThemeStore((state) => state.theme)

  const onDarkMode = () => {
    return activateDarkMode()
  }
  const offDarkMode = () => {
    return disactivateDarkMode()
  }

  return (
    <Container>
      <Row to={URL + '/account'}>
        <RowIcon src={Profile} alt="profile icon" />
        <RowText>Account settings</RowText>
      </Row>
      <Row to={''}>
        <RowIcon src={Moon} alt="darkmode icon" />
        <RowText>Dark mode</RowText>
        <Toggle
          onActive={onDarkMode}
          onInactive={offDarkMode}
          isActivated={theme !== 'light'}
        />
      </Row>
      <Row to={URL + '/update'}>
        <RowIcon src={Upgrade} alt="Upgrade icon" />
        <RowText>Upgrade plan</RowText>
      </Row>
      <Row to={URL + '/lastUpdate'}>
        <RowIcon src={LastUpdate} alt="LastUpdate icon" />
        <RowText>Last update</RowText>
      </Row>
      <Row to={URL + '/support'}>
        <RowIcon src={Support} alt="Support icon" />
        <RowText>Support</RowText>
      </Row>
      <Row to={URL + '/refer'}>
        <RowIcon src={ReferFriend} alt="ReferFriend icon" />
        <RowText>Refer a friend</RowText>
      </Row>
      <RowLogout red={true} onClick={() => setUser(false)}>
        <RowIcon src={Logout} alt="Logout icon" />
        <RowText red={true}>Logout</RowText>
      </RowLogout>
    </Container>
  )
}

export default memo(DropdownMenu)

const RowText = styled.span`
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
  ${(props) =>
    props.red &&
    css`
      color: var(--red);
    `}
`
const RowIcon = styled.img``

const RowLogout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 12px 28px 12px 12px;
  border-bottom: 1px solid #f1f1f1;
  opacity: 0.8;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    opacity: 1;
    transition: all 0.2s;
  }
`

const Row = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 12px 28px 12px 12px;
  border-bottom: 1px solid #f1f1f1;
  opacity: 0.8;
  text-decoration: none;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    opacity: 1;
    transition: all 0.2s;
  }
`

const Container = styled.div`
  position: absolute;
  top: 70px;
  width: max-content;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  z-index: 2;
  display: flex;
  flex-direction: column;
  &:focus {
    outline: 0;
  }
  /* ${({ dropdown }) =>
    !dropdown
      ? css`
          display: none;
        `
      : css`
          display: block;
        `} */
  transition: all 0.3s;
`
