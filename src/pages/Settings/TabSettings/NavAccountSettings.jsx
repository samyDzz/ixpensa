import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavAccountSettings = () => {
  return (
    <Container>
      <Nav>
        <NavLinkStyled to={''} end>
          {' '}
          profile
        </NavLinkStyled>
        <NavLinkStyled to={'password'}> password</NavLinkStyled>
        <NavLinkStyled to={'language'}> language</NavLinkStyled>
        <NavLinkStyled to={'emailNotification'}>
          {' '}
          email notifications
        </NavLinkStyled>
      </Nav>
    </Container>
  )
}

export default NavAccountSettings

const NavLinkStyled = styled(NavLink)`
  border-bottom: 3px solid transparent;
  text-decoration: none;
  padding: 8px 25px;
  font-family: InterMedium;
  font-size: 14px;
  font-weight: 500;
  color: var(--blue-gray);
  text-transform: capitalize;

  &.active {
    font-family: InterMedium;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-blue);
    border-bottom: 3px solid var(--blue);
  }
`

const Nav = styled.nav`
  border-bottom: 1px solid var(--light-gray);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-inline: 28px;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  /* border: 1px solid red; */
`
