import React, { memo } from 'react'
import styled from 'styled-components'

import SlideHorizontale from '../assets/icons/SlidersHorizontal.svg'
import Loupe from '../assets/icons/MagnifyingGlass.svg'

const Filter = () => {
  console.log('refresh Filter !')
  return (
    <>
      <Container>
        <div className="flex2h"></div>
        <Center>
          <Left>
            <WrapperTimes>
              <Card className="active">week</Card>
              <Card>month</Card>
              <Card>year</Card>
            </WrapperTimes>
          </Left>
          <Right>
            {/* filter */}
            <WrapperFilter>
              <img src={SlideHorizontale} alt="SlideHorizontale" />
              <span>filter by</span>
            </WrapperFilter>
            {/* search input */}
            <WrapperSearch>
              <img src={Loupe} alt="Loupe" />
              <Input type="text" placeholder="Search..." />
            </WrapperSearch>
          </Right>
        </Center>
        <div className="flex2h"></div>
      </Container>
    </>
  )
}

export default memo(Filter)

const Input = styled.input`
  border: 0;
  outline: 0;
  height: 100%;
  background-color: transparent;
  ::placeholder {
    color: black;
    font-family: InterMedium;
  }
`

const WrapperFilter = styled.div`
  height: 60px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 20px 16px;
  border-radius: 8px;
  background-color: var(--light-gray);
  span {
    text-transform: capitalize;
    font-family: InterMedium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--dark-blue);
  }
`

const WrapperSearch = styled(WrapperFilter)``

const Card = styled.div`
  width: 91px;
  height: 43px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: InterMedium;
  gap: 10px;
  padding: 12px 24px;
  text-transform: capitalize;
  color: rgba(52, 58, 63, 0.5);
  cursor: pointer;
  &:hover {
    color: var(--black);
  }
  &.active {
    border-radius: 50px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.12);
    background-color: var(--white);
    color: var(--black);
  }
`

const WrapperTimes = styled.div`
  /* width: 312px; */
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--light-gray);
`
const Right = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: flex-end;
`

const Left = styled.div`
  display: flex;
  flex: 1;
`

const Center = styled.div`
  display: flex;
  flex: 8;
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
