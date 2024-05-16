import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components/macro'

import { Link, useNavigate } from 'react-router-dom'

import { useQuery, useQueryClient } from 'react-query'

import { signup } from '../../api/Auth'
import { useUserStore } from '../../stores/Auth.store'
import Loader from '../../components/UI/Loaders/loader'

import googleSvg from '../../assets/icons/Google.svg'
import EyeSvg from '../../assets/icons/Eye.svg'
import LoginIllus from '../../assets/illustrations/illustLogin.svg'
import SignUpCheckIcon from '../../assets/icons/SignUpCheck.svg'
import Message from '../../components/UI/Errors/Message'

function Signup() {
  const setUser = useUserStore((state) => state.setUser)

  const clientQuery = useQueryClient()
  const navigate = useNavigate()

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const HandleSubmit = (e) => {
    e.preventDefault()
    refetch()
  }

  let disabled
  if (fullname !== '' && email !== '' && password !== '') {
    disabled = false
  } else {
    disabled = true
  }

  const { isLoading, error, data, refetch } = useQuery(
    ['signupAPI'],
    () =>
      signup({
        fullname,
        email,
        password
      }),
    {
      enabled: false
    }
  )

  if (error) {
    console.error('ERROR => ', error.message)
  }

  if (data?.success === true) {
    clientQuery.resetQueries('signupAPI').then(() => {
      // connect the user.
      setUser(data.data)
      navigate('/home?redirect=signup')
    })
  }

  useEffect(() => {
    switch (typeof data?.msg) {
      case 'object': {
        // we get an error.
        const errors = data.msg
        const Keys = Object.keys(data.msg)
        const arr = Keys.map((el) => {
          return errors[el][0]
        })
        const firstError = arr[0]
        setErrors(firstError)
        break
      }
      case 'string':
        // we get an error.
        setErrors(data?.msg)
        break
      default:
        break
    }
  }, [data])

  return (
    <Container>
      <ContainerLeft>
        <h1>Expensa</h1>
        <div>
          <Image src={LoginIllus} alt="LoginIllus" />
          <SubTile>The easiest way to manage your personal finances.</SubTile>
          <Ul>
            <Li>
              <img src={SignUpCheckIcon} alt="check icon" />
              <CheckText>Know where your money is going</CheckText>
            </Li>
            <Li>
              <img src={SignUpCheckIcon} alt="check icon" />
              <CheckText>Plan your future and set saving goals</CheckText>
            </Li>
            <Li>
              <img src={SignUpCheckIcon} alt="check icon" />
              <CheckText>Safe and secure</CheckText>
            </Li>
          </Ul>
        </div>
      </ContainerLeft>
      <ContainerRight>
        <WrapperForm>
          {/* form header */}
          <FormHeader>
            <FormHeaderTitle>Sign up</FormHeaderTitle>
            <FormHeaderSubTitle>
              Access to all features, no credit-card required.
            </FormHeaderSubTitle>
          </FormHeader>
          {/* social login */}
          <ButtonGoogle>
            <img src={googleSvg} alt="google logo" />
            <span>Login with Google</span>
          </ButtonGoogle>
          {/* separator */}
          <Separator>
            <Hr />
            <Or> or </Or>
            <Hr />
          </Separator>
          {/* Fields */}
          {errors !== '' && <Message html={errors} />}
          <Form>
            <Field>
              <Label>Full name</Label>
              <Input
                type="text"
                placeholder="Ex : John doe"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                required
              />
            </Field>
            <Field>
              <Label>email address</Label>
              <Input
                type="email"
                placeholder="hello@example.com"
                autoComplete="username"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Field>
            <Field>
              <Label>password</Label>
              <WrapperInput>
                <Input
                  type="password"
                  placeholder="your password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <img src={EyeSvg} alt="eye" />
              </WrapperInput>
            </Field>
            <ButtonSignin onClick={HandleSubmit} disabled={disabled}>
              {isLoading && <Loader />}
              <span>Get Started</span>
            </ButtonSignin>
          </Form>
          {/* back link */}
          <FooterLink left="true">
            Signing up for an Expensa account means you agree to the{' '}
            <a href="_">Terms of Service</a> and <a href="_">Privacy Policy</a>.
          </FooterLink>
          {/* footer */}
          <FooterLink>
            Already have an account? <Link to="/login">Log in</Link>
          </FooterLink>
        </WrapperForm>
      </ContainerRight>
    </Container>
  )
}

export default Signup

const SubTile = styled.span`
  color: var(--white);
  font-family: InterLight;
  font-size: 28px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  margin-top: 40px;
`

const CheckText = styled.span`
  font-family: InterLight;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
`

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  > img {
    width: 28px;
    height: 28px;
  }
`
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
`

const FooterLink = styled.span`
  font-family: InterRegular;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
  ${(props) => {
    return props.left
      ? css`
          text-align: left;
          margin-top: 24px;
        `
      : css`
          text-align: center;
          margin-top: 48px;
        `
  }}
  a {
    font-family: InterSemiBold;
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
  gap: 13px;
  padding: 20px 45px;
  border-radius: 8px;
  background-color: rgba(15, 98, 254);
  border: 0;
  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
          opacity: 0.3;
        `
      : css`
          cursor: pointer;
          opacity: 1;
        `}

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
    border: 1px solid transparent;
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

const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  outline-width: 1px;
  outline-color: var(--light-gray);
  outline-style: var(--outline-style);
  background-color: var(--white);
  :focus-within {
    outline-width: var(--outline-width);
    outline-color: var(--outline-color);
  }
  input {
    display: flex;
    flex: 8;
    border: 0;
    :focus {
      border: 0;
      outline: 0;
    }
  }
  > img {
    display: flex;
    cursor: pointer;
    margin-right: 16px;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`

const Form = styled.form``

const Or = styled.span`
  font-family: InterRegular;
  font-size: 16px;
  color: var(--black);
`
const Hr = styled.hr`
  width: 170px;
  background-color: var(--light-gray);
  border: 0px;
  height: 1px;
`
const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`

const ButtonGoogle = styled.button`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 70px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  margin-bottom: 18px;
  cursor: pointer;
  span {
    font-family: InterSemiBold;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: var(--dark-blue);
  }
`

const FormHeaderSubTitle = styled.span`
  font-family: InterRegular;
  font-size: 16px;
  color: var(--black);
  text-transform: capitalize;
  margin-bottom: 28px;
`

const FormHeaderTitle = styled.h1`
  font-family: InterSemiBold;
  font-size: 36px;
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
  padding-top: 75px;
  padding-bottom: 75px;
`

const Image = styled.img`
  margin-top: 10px;
`

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 31px 27px 0px 27px;
  flex: 3;
  background-color: var(--blue);
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
    justify-content: flex-start;
    > img {
      width: 100%;
    }
  }
`

const Container = styled.div`
  background-color: var(--white);
  display: flex;
  flex: 1;
  height: 100vh;
`
