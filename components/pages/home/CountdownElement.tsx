import * as React from 'react'
import styled from 'styled-components'

interface Props {
  value: number
  text: string
}

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  border: solid 1px #00000020;
  border-radius: 0.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00000080;
`
const Number = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.mainLight};
`

const Text = styled.p``

const NumberTransform = (n: number) => (n >= 10 ? `${n}` : `0${n}`)

const CountdownElement: React.FunctionComponent<Props> = ({ value, text }) => {
  return (
    <Container>
      <Number> {NumberTransform(value)} </Number>
      <Text> {text} </Text>
    </Container>
  )
}

export default CountdownElement
