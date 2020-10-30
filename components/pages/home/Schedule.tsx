import dayjs from 'dayjs'
import * as React from 'react'
import styled from 'styled-components'
import ScheduleElement, { IScheduleElement } from './ScheduleElement'
import * as Template from '../../template/template'

const element: IScheduleElement = {
  date: dayjs('2020-11-15'),
  title: '',
  text: '',
  image: '',
}

const arr = new Array<IScheduleElement>(6)
  .fill(element)
  .map((e, id) => ({ ...e, id }))

const Container = styled(Template.Container)``

const Title = styled(Template.Title)``

const Grid = styled.div`
  display: grid;
  gap: 3rem;
`

const Schedule: React.FunctionComponent = () => {
  return (
    <Container>
      <Title> Schedule </Title>

      <Grid>
        {arr.map((e) => (
          <ScheduleElement key={e.id} {...e} />
        ))}
      </Grid>
    </Container>
  )
}

export default Schedule
