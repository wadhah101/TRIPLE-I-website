import * as React from 'react'
import ScheduleElement, { IScheduleElement } from './Element'
import * as Template from '../../../template/template'
import styles from './schedule.module.scss'

const element: IScheduleElement = {
  title: 'Kick start your career with IEEE INSAT',
  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum optio eius eveniet nihil at, eligendi quia blanditiis nam, libero corrupti ab quos. A eum dignissimos explicabo. Assumenda porro harum vero!`,
}

const data = new Array<IScheduleElement>(4).fill(element)

const mainArr = [
  { date: '25 october - 08 november', data },
  { date: '8 november - 10 november', data },
  { date: '14 november - 20 november', data },
  { date: '21 november', data },
  { date: '22 november', data },
]

const Schedule: React.FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <Template.Title> Schedule </Template.Title>
      {mainArr.map(({ date, data }, id) => (
        <div className={styles.el} key={id}>
          <h3 className={styles.day}>{date}</h3>
          <ul className={styles.grid}>
            {data.map((e, ind) => (
              <ScheduleElement key={ind} {...e} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Schedule
