import * as React from 'react'
import styled from 'styled-components'
import ScheduleElement, { IScheduleElement } from './ScheduleElement'
import * as Template from '../../template/template'

const element: IScheduleElement = {
  title: 'Kick start your career with IEEE INSAT',
  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum optio eius eveniet nihil at, eligendi quia blanditiis nam, libero corrupti ab quos. A eum dignissimos explicabo. Assumenda porro harum vero!`,
}

const data = new Array<IScheduleElement>(4).fill(element)

const Container = styled(Template.Container)`
  padding-bottom: 12vh;
`

const mainArr = [
  { date: '25 october - 08 november', data },
  { date: '8 november - 10 november', data },
  { date: '14 november - 20 november', data },
  { date: '21 november', data },
  { date: '22 november', data },
]

const Grid = styled.ul`
  display: grid;
  gap: 2rem;
`

const Day = styled.h3`
  display: inline-block;
  position: relative;
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
  &::before {
    position: absolute;
    bottom: -2px;
    content: '';
    width: calc(100% + 2rem);
    height: 0.5rem;
    background: ${({ theme }) => theme.colors.main};
  }
`

const Element = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const Schedule: React.FunctionComponent = () => {
  return (
    <Container as="section">
      <Template.Title> Schedule </Template.Title>
      {mainArr.map(({ date, data }, id) => (
        <Element key={id}>
          <Day>{date}</Day>
          <Grid>
            {data.map((e, ind) => (
              <ScheduleElement key={ind} {...e} />
            ))}
          </Grid>
        </Element>
      ))}
    </Container>
  )
}

export default Schedule
