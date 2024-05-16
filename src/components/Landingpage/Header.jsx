import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import IxpensaLogo from '../../assets/logo.svg'

const HeaderSimple = () => {
  return (
    <Container>
      <Left>
        <Logo src={IxpensaLogo} alt="logo icon" />
        <Nav>
          <Ul>
            <Li>
              <a href="#">features</a>
            </Li>
            <Li>
              <a href="#">pricing</a>
            </Li>
            <Li>
              <a href="#">FAQs</a>
            </Li>
          </Ul>
        </Nav>
      </Left>
      <Right>
        <Link to={'/login'} className="btn-signin">
          Sign in
        </Link>
        <Link to={'/signup'} className="btn-signup">
          get started
        </Link>
      </Right>
    </Container>
  )
}

export default HeaderSimple

const Li = styled.li`
  a {
    text-transform: capitalize;
    text-decoration: none;
    font-family: InterRegular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--black);
  }
`
const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 58px;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 48px;
  text-transform: capitalize;
  .btn-signin {
    text-decoration: none;
    font-family: InterSemiBold;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-blue);
  }
  .btn-signup {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 20px 45px;
    border-radius: 28px;
    background-color: var(--green);

    font-family: InterMedium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--black);
  }
`
const Left = styled.div`
  display: flex;
  flex: 2;
  gap: 70px;
`

const Logo = styled.img`
  height: 30px;
`

const Container = styled.div`
  width: 100%;
  height: 86px;
  padding: 31px 84px 26px 84px;
  background-color: var(--white);
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 2;
`
