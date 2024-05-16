/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components/macro'

import { IoMdClose } from 'react-icons/io'

const Optional = styled.span`
  color: var(--blue-gray);
`

export const Close = ({ ...rest }) => {
  return (
    <BgIcon {...rest}>
      <IoMdClose stroke="black" fill={'var(--black)'} size={20} />
    </BgIcon>
  )
}
// eslint-disable-next-line react/prop-types
export const CardFormGroup = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}
// eslint-disable-next-line react/prop-types
export const CardLabel = ({ children, required, optionalText }) => {
  return (
    <Label>
      {children}
      {required && <Required>*</Required>}{' '}
      {optionalText && <Optional>{optionalText}</Optional>}
    </Label>
  )
}
// eslint-disable-next-line react/prop-types
export const CardWrapperInput = ({ children, ...rest }) => {
  return <WrapperInput {...rest}>{children}</WrapperInput>
}
// eslint-disable-next-line react/prop-types
export const WrapperIcon = ({ children }) => {
  return <WrapperIconBg>{children}</WrapperIconBg>
}
// eslint-disable-next-line react/prop-types
export const CardInput = ({ children, ...rest }) => {
  return <Input {...rest} />
}

export const CardSelect = ({ firstItem, children, data, keys, ...rest }) => {
  return (
    <Select {...rest} defaultValue={0} width="100px!important">
      {firstItem && (
        <option value={0} disabled>
          {firstItem}
        </option>
      )}
      {data?.map((el, i) => {
        return (
          <option key={i} value={el[keys.id]}>
            {el[keys.name]} {keys?.extra ? `( ${el[keys.extra]} )` : ''}
          </option>
        )
      })}
    </Select>
  )
}

// eslint-disable-next-line react/prop-types
export const CardTextArea = ({ children, ...rest }) => {
  return <TextArea {...rest}>{children}</TextArea>
}

const TextArea = styled.textarea`
  display: flex;
  flex: 1;
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
  border: 0;
  outline: 0;
  resize: none;
  padding-top: 16px;
`

const Select = styled.select`
  border: 0;

  width: 100px;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
  -webkit-appearance: none;

  height: var(--height-input);
  outline: 0;
  cursor: pointer;
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ itemSelected }) =>
    itemSelected ? 'var(--dark-blue)' : 'var(--blue-gray)'};
  option {
    width: 50%;
    cursor: pointer;
    border: solid 1px #dddddd;
  }
`

const BgIcon = styled.div`
  background-color: var(--light-gray);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`

const Required = styled.span`
  color: var(--red);
`

const WrapperIconBg = styled.div`
  width: 53px;
  height: 39px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  ${({ transparent }) =>
    !transparent &&
    css`
      background-color: var(--light-gray);
    `}
`

const Input = styled.input`
  height: 58px;
  display: flex;
  flex: 1;
  border: 0;
  outline: 0;
  font-size: 16px;
`

const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  justify-content: space-between;
  :focus-within {
    border: 1px solid transparent;
    outline-width: 2px;
    outline-color: var(--blue);
    outline-style: solid;
  }
  cursor: pointer;
  .large {
    height: 81px;
    margin: 6px 0 19px;
    padding: 17px 48px 16px;
    background-color: var(--white-two);
  }
`

const Label = styled.label`
  font-family: InterMedium;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 15px;
  width: 100%;
  position: relative;
`
