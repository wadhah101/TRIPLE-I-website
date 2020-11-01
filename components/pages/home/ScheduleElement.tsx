import { Dayjs } from 'dayjs'
import * as React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

export interface IScheduleElement {
  date: Dayjs
  title: string
  text: string
}

const Container = styled.li`
  display: grid;
  ${up('md')} {
    grid-template-columns: 2fr 8fr;
  }
  padding-bottom: 1.5rem;
  &:not(:last-child) {
    border-bottom: 1px solid #00000020;
  }
`

const Writing = styled.div`
  h4 {
    text-transform: capitalize;
    font-size: 1.75rem;
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

const Time = styled.time`
  color: #000000e0;
  font-size: 1.25rem;
  font-weight: 600;
`

const ScheduleElement: React.FunctionComponent<IScheduleElement> = ({
  date,
  title,
  text,
}) => {
  return (
    <Container>
      <Time>{date.format('hh:mm')}</Time>
      <Writing>
        <h4> {title} </h4>
        <p> {text} </p>
      </Writing>
    </Container>
  )
}

export default ScheduleElement
