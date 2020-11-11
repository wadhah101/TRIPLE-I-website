import * as React from 'react'
import ScheduleElement from './Element'
import styles from './schedule.module.scss'
import dayjs, { Dayjs } from 'dayjs'

class ScheduleData {
  constructor(public title: string, public text: string) {}
}

const mainArr: { date: Dayjs[]; data: ScheduleData[] }[] = [
  {
    date: [dayjs('2018-11-14'), dayjs('2018-11-20')],
    data: [
      new ScheduleData('“How to Pitch” workshop.', ''),
      new ScheduleData('Proteus workshop.', ''),
      new ScheduleData('Data Science workshop.', ''),
      new ScheduleData(
        '"Starting up as an aspiring entrepreneur" workshop.',
        ''
      ),
      new ScheduleData(
        'Robotics and Artificial Intelligence: Challenges and Perspectives workshop.',
        ''
      ),
      new ScheduleData('More workshops to be announced soon.', ''),
    ],
  },
  {
    date: [dayjs('2018-11-21')],
    data: [new ScheduleData('Panel sessions.', '')],
  },
  {
    date: [dayjs('2018-11-22')],
    data: [new ScheduleData('Pitching day!', '')],
  },
]

const Schedule: React.FunctionComponent = () => {
  return (
    <section className={styles.greyBg}>
      <div className={styles.container}>
        <h2 className={styles.baseTitle}> Schedule </h2>
        <ul className={styles.arr}>
          {mainArr.map(({ date, data }, id) => (
            <li className={styles.el} key={id}>
              <h3 className={styles.period}>
                {date.map((e, ind) => (
                  <React.Fragment key={ind}>
                    <div>
                      <p className={styles.num}> {e.format('DD')} </p>
                      <p> {e.format('MMMM')} </p>
                    </div>
                    {ind + 1 !== date.length && (
                      <div className={styles.daySeparator} />
                    )}
                  </React.Fragment>
                ))}
              </h3>
              <ul className={styles.elsGrid}>
                {data.map((e, ind) => (
                  <ScheduleElement key={ind} {...e} />
                ))}
              </ul>
            </li>
          ))}
        </ul>{' '}
      </div>
    </section>
  )
}

export default Schedule
