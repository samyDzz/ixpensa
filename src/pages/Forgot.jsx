import React from 'react'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'
import IllustForgot from '../assets/illustrations/illustForgot.svg'

function Forgot() {
  return (
    <Container>
      <ContainerLeft>
        <h1>Ixpensa</h1>
        <div>
          <Image src={IllustForgot} alt="IllustForgot" />
          <span>The easiest way to manage your personal finances.</span>
        </div>
      </ContainerLeft>
      <ContainerRight>
        <WrapperForm>
          {/* form header */}
          <FormHeader>
            <FormHeaderTitle>Forgot your password?</FormHeaderTitle>
            <FormHeaderSubTitle>
              We’ll help you reset it and get back on track.
            </FormHeaderSubTitle>
          </FormHeader>
          {/* Fields */}
          <Form>
            <Field>
              <Label>email address</Label>
              <Input type="email" placeholder="hello@example.com" required />
            </Field>
            <ButtonSignin>
              <span>Reset password</span>
            </ButtonSignin>
          </Form>
          {/* back link */}
          <FooterBack>back</FooterBack>
          {/* footer */}
          <FooterLink>
            Don’t have an account? <Link to="/signup">Get started</Link>
          </FooterLink>
        </WrapperForm>
      </ContainerRight>
    </Container>
  )
}

export default Forgot

const FooterBack = styled.span`
  margin: 48px 0px;
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black);
  text-transform: capitalize;
  cursor: pointer;
`

const FooterLink = styled.span`
  font-family: InterSemiBold;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black);
  a {
    font-weight: 600;
    color: var(--blue);
    text-decoration: none;
  }
`

const ButtonSignin = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 20px 45px;
  border-radius: 8px;
  background-color: rgba(15, 98, 254, 0.5);
  border: 0;
  cursor: pointer;
  span {
    color: white;
  }
`

const Input = styled.input`
  height: 58px;
  padding: 15px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  :focus {
    outline-width: var(--outline-width);
    outline-color: var(--outline-color);
    outline-style: var(--outline-style);
  }
`

const Label = styled.label`
  flex-grow: 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
  text-transform: capitalize;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`

const Form = styled.form``

const FormHeaderSubTitle = styled.span`
  font-family: InterRegular;
  font-size: 16px;
  color: var(--black);
  text-transform: capitalize;
  margin-bottom: 28px;
`

const FormHeaderTitle = styled.h1`
  font-family: InterSemiBold;
  font-size: 35px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--dark-blue);
  margin-bottom: 12px;
`

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
`
const ContainerRight = styled.div`
  display: flex;
  flex: 9;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  margin-top: 58px;
`

const ContainerLeft = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 31px 27px 0px 27px;
  flex: 3;
  background-color: var(--dark-blue);
  h1 {
    margin-left: 58px;
    font-family: InterSemiBold;
    font-size: 24px;
    font-weight: 600;
    color: var(--white);
    display: flex;
    flex: 1;
  }
  div {
    display: flex;
    flex-direction: column;
    flex: 9;
    img {
      width: 100%;
    }
    span {
      color: var(--white);
      font-family: InterLight;
      font-size: 28px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      color: var(--white);
      margin-top: 40px;
    }
  }
`

const Container = styled.div`
  background-color: var(--white);
  display: flex;
  flex: 1;
  height: 100vh;
  overflow: hidden;
`
