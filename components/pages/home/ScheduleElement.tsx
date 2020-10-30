import dayjs from 'dayjs'
import * as React from 'react'
import styled from 'styled-components'

export interface IScheduleElement {
  date: dayjs.Dayjs
  title: string
  text: string
  image: string
}

const Container = styled.div``

const ScheduleElement: React.FunctionComponent<IScheduleElement> = ({
  date,
  title,
  text,
  image,
}) => {
  return (
    <Container>
      <p>
        {date.toJSON()} {title} {text} {image}
      </p>
    </Container>
  )
}

export default ScheduleElement
