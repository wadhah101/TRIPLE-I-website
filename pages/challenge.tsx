import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import BasePage from '../components/shared/BasePage'

const Page = styled(BasePage)`
  background: #000000;
`

const challenge: NextPage = () => {
  return <Page> hello </Page>
}

export default challenge
