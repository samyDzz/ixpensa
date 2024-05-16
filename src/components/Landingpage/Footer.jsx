import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import fbIcon from '../../assets/icons/socials/Facebook-icon.svg'
import istIcon from '../../assets/icons/socials/Instagram-icon.svg'
import twIcon from '../../assets/icons/socials/Twitter-icon.svg'

const Footer = () => {
  return (
    <ContainerFluid>
      <Container
        className="container"
        style={{
          borderBottom: '1px solid var(--light-black)',
          paddingBottom: '45px'
        }}
      >
        <Column style={{ flex: 6 }}>
          <ColumnLogo>ixpensa</ColumnLogo>
          <ColumnDescription>
            The easiest way to manage
            <br />
            your personal finances.
          </ColumnDescription>
        </Column>
        <Column style={{ flex: 2 }}>
          <ColumnTitle>Product</ColumnTitle>
          <ColumnLink to={'/'}>Features</ColumnLink>
          <ColumnLink to={'/'}>Pricing</ColumnLink>
        </Column>
        <Column style={{ flex: 2 }}>
          <ColumnTitle>Company</ColumnTitle>
          <ColumnLink to={'/'}>About us</ColumnLink>
          <ColumnLink to={'/'}>Contact us</ColumnLink>
        </Column>
        <Column style={{ flex: 2 }}>
          <ColumnTitle>Support</ColumnTitle>
          <ColumnLink to={'/'}>FAQs</ColumnLink>
          <ColumnSocial>
            <a href="">
              <SocialIcon src={fbIcon} alt="facebook" />
            </a>
            <a href="">
              <SocialIcon src={twIcon} alt="twitter" />
            </a>
            <a href="">
              <SocialIcon src={istIcon} alt="instagram" />
            </a>
          </ColumnSocial>
        </Column>
      </Container>
      <Container className="container">
        <Row>
          <RowLink to={'/privacy'}>Privacy</RowLink>
          <RowLink to={'/terms'}>Terms</RowLink>
          <span>© 2022 ixpensa. All Rights Reserved.</span>
        </Row>
      </Container>
    </ContainerFluid>
  )
}

export default Footer

const RowLink = styled(Link)`
  font-family: InterLight;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  text-decoration: none;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  padding-top: 29px;
  span {
    font-family: InterMedium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: var(--white);
  }
`

const SocialIcon = styled.img`
  cursor: pointer;
`

const ColumnSocial = styled.div`
  display: flex;
  gap: 18px;
`

const ColumnLink = styled(Link)`
  font-family: InterLight;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.48px;
  text-align: left;
  color: var(--white);
  text-decoration: none;
`

const ColumnDescription = styled.p`
  margin: 28px 0px;
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
`
const ColumnLogo = styled.span`
  font-family: InterSemiBold;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
`

const ColumnTitle = styled.span`
  font-family: InterSemiBold;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.54px;
  text-align: left;
  color: var(--white);
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`

const Container = styled.div`
  display: flex;
`

const ContainerFluid = styled.div`
  padding: 48px 140px 26px;
  background-color: var(--dark-blue);
`
