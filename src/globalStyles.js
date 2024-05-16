import { createGlobalStyle } from 'styled-components'

// fonts
import InterLight from './fonts/Inter-Light.ttf'
import InterRegular from './fonts/Inter-Regular.ttf'
import InterSemiBold from './fonts/Inter-SemiBold.ttf'
import InterMedium from './fonts/Inter-Medium.ttf'
import InterBold from './fonts/Inter-Bold.ttf'

// theme - dark or Not.
export const dark = {
  lightBlack: '#343a3f',
  blue: '#0f62fe',
  lightGray: '#f2f2f2',
  white: '#242424',
  green: '#a7f0ba',
  darkBlue: '#121619',
  blueGray: '#c1c7cd',
  black: 'white',
  lightBlue: '#9ef0f0',
  success: '#4cd964',
  red: '#ff3b38',
  purple: '#d5c0f0',
  darkGreen: '#298a7a',
  beige: '#f0c790',
  warning: '#ffad3a'
}

export const light = {
  lightBlack: '#343a3f',
  blue: '#0f62fe',
  lightGray: '#f2f2f2',
  white: '#fff',
  green: '#a7f0ba',
  darkBlue: '#121619',
  blueGray: '#c1c7cd',
  black: '#000',
  lightBlue: '#9ef0f0',
  success: '#4cd964',
  red: '#ff3b38',
  purple: '#d5c0f0',
  darkGreen: '#298a7a',
  beige: '#f0c790',
  warning: '#ffad3a'
}

export const GlobalStyle = createGlobalStyle`
  :root {
        /* colors */
      --light-black: ${({ theme }) => theme.lightBlack};
      --blue: ${({ theme }) => theme.blue};
      --light-gray: ${({ theme }) => theme.lightGray};
      --white: ${({ theme }) => theme.white};
      --green: ${({ theme }) => theme.green};
      --dark-blue: ${({ theme }) => theme.darkBlue};
      --blue-gray: ${({ theme }) => theme.blueGray};
      --black: ${({ theme }) => theme.black};
      --light-blue: ${({ theme }) => theme.lightBlue};
      --success: ${({ theme }) => theme.success};
      --red: ${({ theme }) => theme.red};
      --purple: ${({ theme }) => theme.purple};
      --dark-green: ${({ theme }) => theme.darkGreen};
      --beige: ${({ theme }) => theme.beige};
      --warning: ${({ theme }) => theme.warning};
      --white-two: #fbfbfb;
      /* width */
      --max-width : 1920px;
      --height-button : 59px;
      --height-input : 59px;
      /* outline */
      --outline-width : 2px;
      --outline-color: var(--blue);
      --outline-style: solid;
      /* input */
      --f-size: 14px;
  }

  @font-face {
        font-family: 'InterLight';
        src: local('InterLight'), local('InterLight'), url(${InterLight}) format('truetype');
  }

  @font-face {
        font-family: 'InterSemiBold';
        src: local('InterSemiBold'), local('InterSemiBold'), url(${InterSemiBold}) format('truetype');
  }

  @font-face {
        font-family: 'InterBold';
        src: local('InterBold'), local('InterBold'), url(${InterBold}) format('truetype');
  }

  @font-face {
        font-family: 'InterRegular';
        src: local('InterRegular'), local('InterRegular'), url(${InterRegular}) format('truetype');
  }

  @font-face {
        font-family: 'InterMedium';
        src: local('InterMedium'), local('InterMedium'), url(${InterMedium}) format('truetype');
  }

  * {
    margin: 0px;
    padding: 0px;
    font-family: InterRegular;
    color: var(--dark-blue);
    box-sizing: border-box;
  }

  ::placeholder {
    color: var(--blue-gray);
  }

  .container {
      display : flex;
      max-width: var(--max-width);
      margin : 0 auto;
  }

  input {
     font-size : var(--f-size);   
  }
`

// export default GlobalStyle;
