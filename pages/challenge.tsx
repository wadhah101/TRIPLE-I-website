import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Banner from '../components/pages/challenge/Banner'
import BasePage from '../components/shared/BasePage'

const Page = styled(BasePage)`
  background: #000000;
`

const challenge: NextPage = () => {
  return (
    <Page>
      <Banner />
    </Page>
  )
}

export default challenge
