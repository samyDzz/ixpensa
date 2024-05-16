import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'

import { login } from '../../api/Auth'
import Loader from '../../components/UI/Loaders/loader'

import Message from '../../components/UI/Errors/Message'

import googleSvg from '../../assets/icons/Google.svg'
import EyeSvg from '../../assets/icons/Eye.svg'
import LoginIllus from '../../assets/illustrations/illusLogin.svg'
import { useUserStore } from '../../stores/Auth.store'

const ERRORS_MESSAGE = {
  incorrectUsernameAndPassword:
    '<b>Email or password is incorrect.</b> Please try again or you can Reset your password.'
}

function Login() {
  const setUser = useUserStore((state) => state.setUser)

  const clientQuery = useQueryClient()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  let disabled
  if (email !== '' && password !== '') {
    disabled = false
  } else {
    disabled = true
  }

  const HandleLogin = (e) => {
    e.preventDefault()
    refetch()
  }

  const { isFetching, isLoading, error, data, refetch } = useQuery(
    ['loginAPI'],
    () =>
      login({
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
    clientQuery.resetQueries('loginAPI').then(() => {
      // connect the user.
      setUser(data.data)
      navigate('/home?redirect=login')
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
      case 'undefined':
        break
      default:
        setErrors(ERRORS_MESSAGE.incorrectUsernameAndPassword)
        break
    }
  }, [data])

  return (
    <Container>
      <ContainerLeft>
        <h1>Expensa</h1>
        <div>
          <Image src={LoginIllus} alt="LoginIllus" />
          <span>The easiest way to manage your personal finances.</span>
        </div>
      </ContainerLeft>
      <ContainerRight>
        <WrapperForm>
          {/* form header */}
          <FormHeader>
            <FormHeaderTitle>welcome back!</FormHeaderTitle>
            <FormHeaderSubTitle>enter your detail below</FormHeaderSubTitle>
          </FormHeader>
          {errors && <Message html={errors} />}
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
          <Form>
            <Field>
              <Label>email address</Label>
              <Input
                type="email"
                placeholder="hello@example.com"
                autoComplete="username"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field>
              <WrapperLabels>
                <Label>password</Label>
                <LabelLink>
                  <Link to={'/forgot'}>Forgot your password?</Link>
                </LabelLink>
              </WrapperLabels>
              <WrapperInput>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="your password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={EyeSvg}
                  alt="eye"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </WrapperInput>
            </Field>
            <ButtonSignin onClick={HandleLogin} disabled={disabled}>
              {(isLoading || isFetching) && <Loader />}
              <span>Sign in</span>
            </ButtonSignin>
          </Form>
          {/* footer */}
          <FooterLink>
            Don’t have an account? <Link to={'/signup'}>Get started</Link>
          </FooterLink>
        </WrapperForm>
      </ContainerRight>
    </Container>
  )
}

export default Login

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
  margin-top: 48px;
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
  background-color: rgba(15, 98, 254);
  border: 0;
  opacity: ${({ disabled }) => (disabled === true ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled === true ? 'not-allowed' : 'pointer')};
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
    border: solid 1px transparent;
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

const LabelLink = styled(Label)`
  color: rgba(52, 58, 63, 0.5);
  font-family: InterRegular;
  font-size: 14px;
  cursor: pointer;
`

const WrapperLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background-color: var(--white);
  outline-width: 1px;
  outline-color: var(--light-gray);
  outline-style: var(--outline-style);
  &:focus-within {
    outline-width: var(--outline-width);
    outline-color: var(--outline-color);
  }
  input {
    display: flex;
    flex: 8;
    border: 0;
    &:focus {
      border: 0;
      outline: 0;
    }
  }
  img {
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
