import { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  background: #f7f7f5;
  padding-top: ${({ theme }) => theme.dimension.header.desktop}rem;
`

export const Home: NextPage = () => {
  return <Wrapper>work</Wrapper>
}

export default Home
