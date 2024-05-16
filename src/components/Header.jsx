import React, { memo, useState } from 'react'
import styled, { css } from 'styled-components/macro'

import { initialName } from '../utils/InitialsName'

import { useUserStore } from '../stores/Auth.store'

// import BellIcon from "../assets/icons/Bell_Regular.svg";
import ProfileDropdown from '../assets/icons/ProfileDropdown.svg'
import IxpensaLogo from '../assets/logo.svg'
import DropdownMenu from './DropdownMenu'

import Badge from '../components/UI/Badges'
import { NavLink } from 'react-router-dom'

const Header = () => {
  console.log('refresh popup Header !')
  const fullName = useUserStore((state) => state.user.infos.full_name)
  const [Dropdown, setDropdown] = useState(false)
  return (
    // header
    <Container>
      <Wrapper>
        <Left>
          <img src={IxpensaLogo} alt="logo ixpensa" />
          <Badge text={'14 trial days left'} primary />
        </Left>
        <Center>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? 'selectedNavLink' : ''
                }
              >
                transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/charts"
                className={({ isActive }) =>
                  isActive ? 'selectedNavLink' : ''
                }
              >
                charts
              </NavLink>
            </li>
          </ul>
        </Center>
        <Right>
          {/* <RightSectionOne>
                        <WrapperBell href="#links">
                            <RedBull></RedBull>
                            <img src={BellIcon} alt="bellIcon" />
                        </WrapperBell>
                    </RightSectionOne> */}
          <RightSectionTwo>
            <Name>{fullName}.</Name>
            <Avatar>
              <span>{initialName(fullName)}</span>
            </Avatar>
            <DropdownIcon
              onClick={() => setDropdown(!Dropdown)}
              dropdown={Dropdown}
            >
              <img src={ProfileDropdown} alt="up icon dropdown" />
            </DropdownIcon>
            {/* dropdown menu */}
            {Dropdown && <DropdownMenu dropdown={Dropdown} />}
          </RightSectionTwo>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default memo(Header)

const DropdownIcon = styled.div`
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  height: 80px;
  align-items: center;
  img {
    ${({ dropdown }) =>
      dropdown
        ? css`
            transform: rotate(0deg);
          `
        : css`
            transform: rotate(180deg);
          `}
    height: 8px;
    transition: all 0.3s;
  }
`

// const RedBull = styled.div`
//     width: 10px;
//     height: 10px;
//     border: solid 2px var(--white);
//     background-color: #ff3b38;
//     border-radius: 50%;
//     position: absolute;
//     right: 0;
// `;

// const WrapperBell = styled.a`
//     position: relative;
//     cursor: pointer;
// `;

const Avatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: var(--blue);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: InterSemiBold;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--white);
  }
`

const Name = styled.span`
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: var(--dark-blue);
`

// const RightSectionOne = styled.div`
//     display: flex;
//     flex: 1;
//     justify-content: center;
// `;

const RightSectionTwo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  position: relative;
`

const Left = styled.div`
  display: flex;
  flex: 1;
  gap: 18px;
  img {
    height: 30px;
  }
`

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  ul {
    list-style: none;
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  li {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    a {
      display: flex;
      height: 100%;
      text-decoration: none;
      align-items: center;
      text-transform: capitalize;
      border-bottom: 3px solid white;
      transition: all 0.3s;
      &.selectedNavLink {
        font-family: InterSemiBold;
        font-weight: 600;
        color: var(--blue);
        border-bottom: 3px solid var(--blue);
        transition: all 0.3s;
      }
      &:hover {
        font-family: InterSemiBold;
        font-weight: 600;
        color: var(--blue);
        border-bottom: 3px solid var(--blue);
        transition: all 0.3s;
      }
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding-inline: 84px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
`
