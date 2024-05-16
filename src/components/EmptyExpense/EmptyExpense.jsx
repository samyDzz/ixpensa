import React from 'react'
import styled from 'styled-components'

import FrameEmpty from '../../assets/illustrations/EmptyIllustration.svg'

const EmptyExpense = () => {
  return (
    <Container>
      <div className="flex2h"></div>
      <Empty>
        <img src={FrameEmpty} alt="empty frame" />
        <EmptyText>Welcome to Expensa</EmptyText>
        <EmptySubText>Start by adding your first transactions.</EmptySubText>
      </Empty>
      <div className="flex2h"></div>
    </Container>
  )
}

export default EmptyExpense

const EmptySubText = styled.span`
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black);
`

const EmptyText = styled.span`
  font-family: InterSemiBold;
  font-size: 48px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-blue);
`

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-bottom: 130px;
  img {
    width: 270px;
  }
`

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding-top: 24px;
  padding-bottom: 16px;
  .flex2h {
    display: flex;
    flex: 2;
  }
`
