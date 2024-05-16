import React from 'react'
import styled from 'styled-components'

import Header from '../components/Landingpage/Header'
import Hero from '../components/Landingpage/Hero'
import TrustedUsers from '../components/Landingpage/TrustedUsers'
import Analytics from '../components/Landingpage/Analytics'
import Features from '../components/Landingpage/Features'
import Pricing from '../components/Landingpage/Pricing'
import Faqs from '../components/Landingpage/Faqs'
import Footer from '../components/Landingpage/Footer'

const LandingPage = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <TrustedUsers />
      <Analytics />
      <Features />
      <Pricing />
      <Faqs />
      <Footer />
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  margin: 0 auto;
`
