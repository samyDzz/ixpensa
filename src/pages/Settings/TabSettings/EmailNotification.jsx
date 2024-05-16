import React from 'react'
import styled, { css } from 'styled-components'
import SimpleButton from '../../../components/UI/Buttons/SimpleButton'

const EmailNotification = () => {
  return (
    <CardBodyRow gap={32} column>
      <Row>
        <RowLeft>
          <input id={'dailyTransaction'} type="checkbox" />
        </RowLeft>
        <RowRight>
          <Title htmlFor="dailyTransaction">Daily transaction remiders</Title>
          <Description>
            Remind me to insert my transaction of the day.
          </Description>
        </RowRight>
      </Row>
      <Row>
        <RowLeft>
          <input id={'UpdateUpcoming'} type="checkbox" />
        </RowLeft>
        <RowRight>
          <Title htmlFor="UpdateUpcoming">Updates and upcoming features</Title>
          <Description>Send me email about upcoming updates.</Description>
        </RowRight>
      </Row>
      <Row>
        <RowLeft>
          <input id={'SavingTips'} type="checkbox" />
        </RowLeft>
        <RowRight>
          <Title htmlFor="SavingTips">Saving tips</Title>
          <Description>Send me tips about finance and saving.</Description>
        </RowRight>
      </Row>
      <SimpleButton text="Save changes" bg="var(--blue)" color="var(--white)" />
    </CardBodyRow>
  )
}

export default EmailNotification

const Description = styled.span`
  font-family: InterRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--blue-gray);
`
const Title = styled.label`
  font-family: InterSemiBold;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
  cursor: pointer;
`
const RowRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
const RowLeft = styled.div`
  input {
    transform: scale(1.3);
    overflow: hidden;
    accent-color: var(--blue);
    cursor: pointer;
  }
`
const Row = styled.div`
  display: flex;
  gap: 12px;
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
