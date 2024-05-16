import React from 'react'
import styled from 'styled-components'
import SimpleButton from '../components/UI/Buttons/SimpleButton'
import DownloadSimple from '../assets/icons/DownloadSimple.svg'
const DownloadReport = () => {
  return (
    <Container>
      <div className="flex2h"></div>
      <Center>
        <span>Download your report in PDF or CSV</span>
        <SimpleButton
          text={'Download report'}
          bg={'var(--green)'}
          icon={{
            src: DownloadSimple,
            alt: 'Donwload icon'
          }}
          width="fit-content"
          padding="19px 28px"
        />
      </Center>
      <div className="flex2h"></div>
    </Container>
  )
}

export default DownloadReport

const Center = styled.div`
  display: flex;
  flex: 8;
  justify-content: flex-start;
  flex-direction: column;
  gap: 12px;
  span {
    font-family: InterRegular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark-black);
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
