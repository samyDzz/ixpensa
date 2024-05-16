import React from 'react'
import styled from 'styled-components'
import Header from '../../components/UI/Cards/Header'
import PropTypes from 'prop-types'

// affichage des cards dans lastupdate section.
import LastUpdateIcon from '../../assets/icons/LastUpdate.svg'
const CardsUi = ({ title, description, datetime }) => {
  return (
    <Cards>
      <CardIcon src={LastUpdateIcon} alt="flag icon" />
      <CardInfos>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDatetime>{datetime}</CardDatetime>
      </CardInfos>
    </Cards>
  )
}

CardsUi.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  datetime: PropTypes.string
}

const LISTS = [
  {
    id: 1,
    title: 'Connect your bank',
    description:
      'Centralizes all your accounts so you can learn, manage, and improve your finances.',
    date: '3 days ago - April 5, 2022 at 03:05pm'
  },
  {
    id: 2,
    title: 'Add family member',
    description: 'Now you can add a family member into your account.',
    date: '20 days ago - March 18, 2022 at 05:29pm'
  },
  {
    id: 3,
    title: 'Multiple wallets',
    description: 'Create multiple wallet to better manage your finance.',
    date: '45 days ago - February 21, 2022 at 02:00pm'
  }
]

const LastUpdate = () => {
  return (
    <Card>
      <Header title={'Last Update'} />
      <CardBody>
        {LISTS.map((el) => {
          return (
            <CardsUi
              key={el.id}
              title={el.title}
              description={el.description}
              datetime={el.date}
            />
          )
        })}
      </CardBody>
    </Card>
  )
}

export default LastUpdate

const CardDatetime = styled.span`
  font-family: InterRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--blue-gray);
`
const CardDescription = styled.p`
  font-family: InterRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
  margin-bottom: 12px;
`
const CardTitle = styled.span`
  display: flex;
  font-family: InterSemiBold;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
  margin-bottom: 8px;
`
const CardInfos = styled.div``
const CardIcon = styled.img`
  width: 75px;
`
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 9px;
  padding: 16px 0 20px 12px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  margin-bottom: 16px;
`

// design for card 👆👆👆👆

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border : 1px solid red; */
  padding-inline: 48px;
  padding-bottom: 28px;
  padding-top: 25px;
`

const Card = styled.div`
  width: 682px;
  padding-top: 24px;
  border-radius: 8px;
  background-color: var(--white);
`
