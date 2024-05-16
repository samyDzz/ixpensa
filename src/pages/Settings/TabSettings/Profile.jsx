import React from 'react'
import styled, { css } from 'styled-components'
import SimpleInput from '../../../components/UI/Inputs/SimpleInput'
import Avatar from '../../../components/UI/Avatar'
import SimpleButton from '../../../components/UI/Buttons/SimpleButton'

const Profile = () => {
  return (
    <>
      <CardBodyRow gap={'25'} align={'center'}>
        {/* the avatar can be DIV or IMAGE :D check the AVATAR component. */}
        <Avatar initials={'yb'} />
        <ButtonFile>Change</ButtonFile>
      </CardBodyRow>
      <CardBodyRow column gap={18}>
        <SimpleInput
          id={'fullname'}
          label={'Full name'}
          type="text"
          placeholder="Your fullname"
        />
        <SimpleInput
          id={'email'}
          label={'Email address'}
          type="text"
          placeholder="hello@gmail.com"
        />
        <SimpleInput
          id={'password'}
          label={'Password'}
          type="text"
          placeholder=" * * * * * * *"
        />
        <SimpleButton
          marginTop={30}
          text={'Save changes'}
          bg="var(--blue)"
          color="var(--white)"
          disabled
        />
      </CardBodyRow>
    </>
  )
}

export default Profile

const ButtonFile = styled.button`
  font-family: InterMedium;
  width: 98px;
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 20px 45px;
  border-radius: 8px;
  background-color: var(--light-gray);
  border: 0;
  cursor: pointer;
`

const CardBodyRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 28px;
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
