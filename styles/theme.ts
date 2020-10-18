import { up } from 'styled-breakpoints'
import { createGlobalStyle } from 'styled-components'

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const colors = {
  maximumBluePurple: '#c2aff0',
  ieeeBlue: '#00a7e1',
  alabaster: ' #e8eddf',
  maizeCrayola: '#f5cb5c',
  eerieBlack: '#242423',
}
const fonts = {
  casual: `'Poppins', sans-serif`,
  heading: `'Signika Negative', sans-serif`,
}

const dimension = {
  header: { desktop: 4.5 },
}

export const defaultTheme = { dimension, breakpoints, colors, fonts }

export const GlobalStyles = createGlobalStyle`

html {       font-size: 16px;
    }
   ${up('md')} {
     html {
      font-size: 13px;
     }
   }
   ${up('xl')} {
     html {
       font-size: 16px;
     }
   }
`
