import { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div``

const Button = styled.button`
  padding: 0.75rem;
  background: red;
`

export const Home: NextPage = () => {
  return (
    <Wrapper>
      <Button>page register</Button>
    </Wrapper>
  )
}

export default Home
