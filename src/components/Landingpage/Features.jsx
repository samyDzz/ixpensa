import React from 'react'
import styled from 'styled-components'

import illusFeature from '../../assets/illustrations/landingPageFeatures.webp'
import manPainting from '../../assets/illustrations/manPainting.svg'
import CheckCircle from '../../assets/icons/CheckCircle.svg'

const Features = () => {
  return (
    <ContainerFluid>
      <Container className="container">
        <Title>Features</Title>
        <Descr>
          Easy accounting as it
          <br /> should be.
        </Descr>
        <Image>
          <img src={illusFeature} alt="feature illustration" />
          <WrapperFeature>
            <Feature>
              <img src={CheckCircle} alt="circle check" />
              <span>Add transactions</span>
            </Feature>
            <Feature>
              <img src={CheckCircle} alt="circle check" />
              <span>Analyse charts</span>
            </Feature>
            <Feature>
              <img src={CheckCircle} alt="circle check" />
              <span>Export report</span>
            </Feature>
            <Feature>
              <img src={CheckCircle} alt="circle check" />
              <span>Encrypted end-to-end</span>
            </Feature>
            <Feature>
              <img src={CheckCircle} alt="circle check" />
              <span>Dark mode</span>
            </Feature>
          </WrapperFeature>
        </Image>
      </Container>
    </ContainerFluid>
  )
}

export default Features

const Feature = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  justify-content: center;
  align-items: center;
  span {
    font-family: InterRegular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--white);
  }
`
const WrapperFeature = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 28px;
`

const Image = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  > img {
    max-width: 700px;
    margin-top: 48px;
  }
  ::after {
    content: url(${manPainting});
    width: 360px;
    position: absolute;
    bottom: 0px;
    right: -360px;
  }
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
  color: var(--white);
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
  color: var(--green);
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
  background-color: var(--light-black);
`
