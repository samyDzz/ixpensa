import React from 'react'
import styled from 'styled-components'
import Question from './Question'

const QUESTIONS = [
  {
    qst: 'Question 01 ?',
    res: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
  },
  {
    qst: 'Question 02 ?',
    res: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
  },
  {
    qst: 'Question 03 ?',
    res: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
  },
  {
    qst: 'Question 04 ?',
    res: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
  }
]

const Faqs = () => {
  return (
    <ContainerFluid>
      <Container className="container">
        <Title>FAQ</Title>
        <Descr>
          Frequently asked <br />
          questions
        </Descr>
        <WrapperQuestions>
          {QUESTIONS.map((e, i) => {
            return <Question key={i} qst={e.qst} res={e.res} />
          })}
        </WrapperQuestions>
      </Container>
    </ContainerFluid>
  )
}

export default Faqs

const WrapperQuestions = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-top: 48px;
`

const Descr = styled.h5`
  font-family: InterLight;
  font-size: 48px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-blue);
`
const Title = styled.span`
  font-family: InterSemiBold;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 4.8px;
  text-align: center;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 18px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerFluid = styled.div`
  /* height: 833px; */
  padding: 52px 0 40px 0px;
  background-color: var(--white);
  padding-bottom: 123px;
`
