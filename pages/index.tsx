import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/home/Banner'
import Description from '../components/pages/home/Description'
import BasePage from '../components/shared/BasePage'

export const Home: NextPage = () => {
  return (
    <BasePage>
      <Banner />
      <Description />
    </BasePage>
  )
}

export default Home
