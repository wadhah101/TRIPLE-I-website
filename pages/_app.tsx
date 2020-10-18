import '../styles/index.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyles } from '../styles/theme'
import { AnalyticsProvider } from 'use-analytics'
import { defaultAnalytics } from '../lib/analytics'
import React from 'react'
import AppHead from '../components/app/AppHead'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnalyticsProvider instance={defaultAnalytics}>
      <ThemeProvider theme={defaultTheme}>
        <AppHead />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AnalyticsProvider>
  )
}

export default MyApp
