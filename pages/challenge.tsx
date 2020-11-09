import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/challenge/Banner'
import Goal from '../components/pages/challenge/Goal'
import BasePage from '../components/shared/BasePage'

const challenge: NextPage = () => {
  return (
    <BasePage>
      <Banner />
      <Goal />
    </BasePage>
  )
}

export default challenge
