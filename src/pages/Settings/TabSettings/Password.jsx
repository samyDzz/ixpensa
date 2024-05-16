import React from 'react'
import styled, { css } from 'styled-components'
import SimpleInput from '../../../components/UI/Inputs/SimpleInput'
import InputWithComponent from '../../../components/UI/Inputs/InputWithComponent'
import LockSimple from '../../../assets/icons/LockSimple.svg'
import SimpleButton from '../../../components/UI/Buttons/SimpleButton'

const Password = () => {
  return (
    <CardBodyRow column gap={18}>
      <InputWithComponent
        id={'password'}
        label={'Password'}
        component={<img src={LockSimple} alt="lock icon" />}
        placeholder="* * * * * * *"
        type="password"
        style={{ height: '50px' }}
      />
      <SimpleInput
        id={'newPassword'}
        label={'New password'}
        type="password"
        placeholder=""
      />
      <SimpleInput
        id={'confirmNewPassword'}
        label={'Confirm new password'}
        type="password"
        placeholder=""
      />
      <SimpleButton
        marginTop={48}
        color="var(--white)"
        text="Change password"
        bg="var(--blue)"
      />
    </CardBodyRow>
  )
}

export default Password

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
