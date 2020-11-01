import dayjs from 'dayjs'
import * as React from 'react'
import styled from 'styled-components'
import ScheduleElement, { IScheduleElement } from './ScheduleElement'
import * as Template from '../../template/template'
import { up } from 'styled-breakpoints'

const element: IScheduleElement = {
  date: dayjs('2020-11-15'),
  title: 'Kick start your career with IEEE INSAT',
  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum optio eius eveniet nihil at, eligendi quia blanditiis nam, libero corrupti ab quos. A eum dignissimos explicabo. Assumenda porro harum vero!`,
}

const arr = new Array<IScheduleElement>(4).fill(element)

const Container = styled(Template.Container)`
  ${up('md')} {
  }
`

const Title = styled(Template.Title)``

const Grid = styled.li`
  display: grid;
  gap: 2rem;
`

const Day = styled.div`
  h3 {
    display: inline-block;
    position: relative;
    font-size: 2.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    &::before {
      position: absolute;
      bottom: 0px;
      content: '';
      width: 130%;
      height: 0.75rem;
      background: ${({ theme }) => theme.colors.main};
    }
  }
  margin-bottom: 1rem;
  ${up('md')} {
    max-width: 50%;
  }

  p {
    color: #000000c0;
  }
`

const Schedule: React.FunctionComponent = () => {
  return (
    <Container>
      <div>
        <Title> Schedule </Title>
        <Day>
          <h3>14 november</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis
            error praesentium deserunt architecto ut voluptates, pariatur maxime
            soluta tenetur aperiam, ipsa quae aliquid! Possimus molestias itaque
            beatae aliquam sed.
          </p>
        </Day>
        <Grid>
          {arr.map((e, ind) => (
            <ScheduleElement key={ind} {...e} />
          ))}
        </Grid>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Day>
          <h3>15 november</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis
            error praesentium deserunt architecto ut voluptates, pariatur maxime
            soluta tenetur aperiam, ipsa quae aliquid! Possimus molestias itaque
            beatae aliquam sed.
          </p>
        </Day>
        <Grid>
          {arr.map((e, ind) => (
            <ScheduleElement key={ind} {...e} />
          ))}
        </Grid>
      </div>
    </Container>
  )
}

export default Schedule
