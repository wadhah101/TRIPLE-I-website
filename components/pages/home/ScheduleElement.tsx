import * as React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

export interface IScheduleElement {
  title: string
  text: string
}

const Container = styled.li`
  display: grid;
  padding-bottom: 1.5rem;
  &:not(:last-child) {
    border-bottom: 1px solid #00000020;
  }
  h4 {
    text-transform: capitalize;
    font-size: 1.5rem;
    color: #000000d0;
    line-height: 125%;
    font-weight: 700;

    ${up('md')} {
      max-width: 70%;
    }
  }
  p {
    color: #00000080;
  }
`

const ScheduleElement: React.FunctionComponent<IScheduleElement> = ({
  title,
  text,
}) => {
  return (
    <Container>
      <h4> {title} </h4>
      <p> {text} </p>
    </Container>
  )
}

export default ScheduleElement
