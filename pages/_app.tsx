import '../styles/index.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyles } from '../styles/theme'
import { AnalyticsProvider } from 'use-analytics'
import { defaultAnalytics } from '../lib/analytics'
import React from 'react'
import AppHead from '../components/app/AppHead'
import Header from '../components/app/Header'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnalyticsProvider instance={defaultAnalytics}>
      <ThemeProvider theme={defaultTheme}>
        <AppHead />
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ThemeProvider>
    </AnalyticsProvider>
  )
}

export default MyApp
