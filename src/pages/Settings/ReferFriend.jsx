import React from 'react'
import styled, { css } from 'styled-components/macro'
import SimpleButton from '../../components/UI/Buttons/SimpleButton'
import Header from '../../components/UI/Cards/Header'

import InputWithComponent from '../../components/UI/Inputs/InputWithComponent'

import Facebook from '../../assets/icons/socials/FacebookRefer.svg'
import Messenger from '../../assets/icons/socials/MessengerRefer.svg'
import Instagram from '../../assets/icons/socials/InstagramRefer.svg'
import Twitter from '../../assets/icons/socials/TwitterRefer.svg'

const Account = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Card>
        <Header title={'Refer a friend'} />
        <CardBody>
          <CardBodyRow column gap="18" align="center">
            <Title>Give 1 Month, Get 1 Month Free</Title>
            <Description>
              Refer people to ixpensa and get one free month for each of them
              who join the platform.You can invite as many friend as you like.
            </Description>
          </CardBodyRow>
          <CardBodyRow>
            <InputWithComponent
              id="referLink"
              label={'Referal link'}
              color={'white'}
              placeholder={'https://ixpensa.com/signup?ref=XXX'}
              component={
                <SimpleButton
                  text={'Copy link'}
                  color={'var(--white)'}
                  bg={'var(--blue)'}
                />
              }
            />
          </CardBodyRow>
          <CardBodyRow column align="center" gap={18}>
            <Small>Or share via</Small>
            <WrapperSocial>
              <WrapperIcon>
                <img src={Facebook} alt="facebook icon" />
              </WrapperIcon>
              <WrapperIcon>
                <img src={Messenger} alt="messenger icon" />
              </WrapperIcon>
              <WrapperIcon>
                <img src={Instagram} alt="instagram icon" />
              </WrapperIcon>
              <WrapperIcon>
                <img src={Twitter} alt="twitter icon" />
              </WrapperIcon>
            </WrapperSocial>
          </CardBodyRow>
        </CardBody>
      </Card>
      <SimpleButton
        color={'var(--white)'}
        bg={'var(--red)'}
        text="Delete account"
        style={{ marginTop: '50px', width: '60%', alignSelf: 'center' }}
      />
    </div>
  )
}

export default Account

const WrapperIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 16px 0 0;
  padding: 14px;
  border-radius: 8px;
  background-color: var(--light-gray);
  cursor: pointer;
`

const WrapperSocial = styled.div`
  display: flex;
`
const Small = styled.span`
  font-family: InterMedium;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`

const Description = styled.p`
  text-align: center;
`

const Title = styled.div`
  font-family: InterSemiBold;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`

const CardBodyRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 28px;
  justify-content: center;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap + 'px'};
    `}
  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 84px;
  padding-top: 37px;
  /* padding-bottom: 28px; */
`

const Card = styled.div`
  width: 682px;
  padding-top: 24px;
  border-radius: 8px;
  background-color: var(--white);
`
