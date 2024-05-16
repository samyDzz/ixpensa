import React from 'react'
import styled from 'styled-components'
import SimpleButton from '../../components/UI/Buttons/SimpleButton'
import Header from '../../components/UI/Cards/Header'

const HelpSupport = () => {
  return (
    <Card>
      <Header title={'Billing'} />
      <CardBody>
        <FormGroup>
          <Label>Subject</Label>
          <SelectSubject>
            <option value="0">Select Subject</option>
            <option value="1">sujet 1</option>
            <option value="2">sujet 2</option>
            <option value="3">sujet 3</option>
          </SelectSubject>
          <Textarea placeholder={'Your Message'}></Textarea>
          <SimpleButton
            text="Send message"
            color="var(--white)"
            marginTop={28}
            bg="var(--blue)"
          />
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default HelpSupport

const Textarea = styled.textarea`
  width: 400px;
  height: 190px;
  margin-top: 18px;
  padding: 16px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  resize: none;
  display: block;
  &:focus {
    outline-color: var(--outline-color);
    outline-width: var(--outline-width);
  }
  &::placeholder {
    color: var(--blue-gray);
  }
`

const SelectSubject = styled.select`
  width: 400px;
  padding: 19px 16px 20px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  outline-color: var(--outline-color);
  outline-width: var(--outline-width);
`
const Label = styled.span`
  font-family: InterMedium;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
