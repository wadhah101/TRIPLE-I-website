import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/challenge/Banner'
import Goal from '../components/pages/challenge/Goal'
import Pitch from '../components/pages/challenge/Pitch'
import BasePage from '../components/shared/BasePage'

const challenge: NextPage = () => {
  return (
    <BasePage>
      <Banner />
      <Goal />
      <Pitch />
    </BasePage>
  )
}

export default challenge
