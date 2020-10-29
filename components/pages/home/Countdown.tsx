import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CountdownElement from './CountdownElement'
import duration from 'dayjs/plugin/duration'
import dayjs from 'dayjs'

const f = (value: number, text: string) => ({ value, text })

const arr = [
  f(0, 'weeks'),
  f(0, 'days'),
  f(0, 'hours'),
  f(0, 'min'),
  f(0, 'sec'),
]

const Container = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: start;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 3rem 0;
`

const dateDiffFactory = (current: dayjs.Dayjs, event: dayjs.Dayjs) => {
  const diff = dayjs.duration(event.diff(current))
  return [
    f(diff.weeks(), 'weeks'),
    f(diff.days() - diff.weeks() * 7, 'days'),
    f(diff.hours(), 'hours'),
    f(diff.minutes(), 'min'),
    f(diff.seconds(), 'sec'),
  ]
}

const Countdown: React.FunctionComponent = () => {
  const [data, setdata] = useState(arr)

  useEffect(() => {
    dayjs.extend(duration)
    const event = dayjs('2020-11-20T16:00:00.000Z')
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
      {data.map(({ value, text }) => (
        <CountdownElement key={text} value={value} text={text} />
      ))}
    </Container>
  )
}

export default Countdown
