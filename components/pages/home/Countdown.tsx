import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CountdownElement from './CountdownElement'
import duration from 'dayjs/plugin/duration'
import dayjs, { Dayjs } from 'dayjs'
import { down, up } from 'styled-breakpoints'

const dataDay = (value: number, text: string) => ({ value, text })

const arr = [
  dataDay(0, 'weeks'),
  dataDay(0, 'days'),
  dataDay(0, 'hours'),
  dataDay(0, 'min'),
  dataDay(0, 'sec'),
]

const Container = styled.div`
  margin: 1rem 0;
  ${up('md')} {
    margin: 3rem 0;
  }
`

const ElementGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  ${up('md')} {
    grid-template-columns: repeat(5, 1fr);
  }

  ${down('md')} {
    > *:first-child {
      grid-column: 1 / -1;
    }
  }
`

const dateDiffFactory = (current: Dayjs, event: Dayjs) => {
  const diff = dayjs.duration(event.diff(current))
  return [
    dataDay(diff.weeks(), 'weeks'),
    dataDay(diff.days() % 7, 'days'),
    dataDay(diff.hours(), 'hours'),
    dataDay(diff.minutes(), 'min'),
    dataDay(diff.seconds(), 'sec'),
  ].map((e) => ({ ...e, value: Math.max(0, e.value) }))
}

const Countdown: React.FunctionComponent = () => {
  const [data, setdata] = useState(arr)

  useEffect(() => {
    dayjs.extend(duration)
    const event = dayjs('2020-11-21T16:00:00.000Z')
    const interval = setInterval(() => {
      const newArr = dateDiffFactory(dayjs(), event)
      setdata(newArr)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <Container>
      <ElementGrid>
        {data.map(({ value, text }) => (
          <CountdownElement key={text} value={value} text={text} />
        ))}
      </ElementGrid>
    </Container>
  )
}

export default Countdown
