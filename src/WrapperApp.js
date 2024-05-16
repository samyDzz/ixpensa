import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { dark, GlobalStyle, light } from './globalStyles'
import { ThemeStore } from './stores/Theme.store'

const WrapperApp = () => {
  const { theme } = ThemeStore()

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default WrapperApp
