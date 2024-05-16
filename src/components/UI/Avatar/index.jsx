import React from 'react'
import styled from 'styled-components'

const index = ({ initials, src }) => {
  if (initials) {
    return (
      <ImageInitials>
        <span>{initials}</span>
      </ImageInitials>
    )
  }
  return <Image src={src} alt="avatar" />
}

export default index

const ImageInitials = styled.div`
  width: 68px;
  height: 68px;
  /* margin: 37px 24px 28px 142px; */
  /* padding: 22px 21px; */
  border-radius: 50%;
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: InterSemiBold;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--white);
    text-transform: uppercase;
  }
`

const Image = styled.img``
