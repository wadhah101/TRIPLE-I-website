import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/home/Banner'
import BasePage from '../components/shared/BasePage'

export const Home: NextPage = () => {
  return (
    <BasePage>
      <Banner />

      <p style={{ height: '100vh' }}></p>
    </BasePage>
  )
}

export default Home
