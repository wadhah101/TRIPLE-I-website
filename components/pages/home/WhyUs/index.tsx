import clsx from 'clsx'
import * as React from 'react'
import { placeholder } from '../../../../pages/_app'
import styles from './whyus.module.scss'

const arr = [
  { title: 'experience speaks', text: placeholder },
  { title: ' reach', text: placeholder },
  {
    title: 'community driven',
    text: `Community-based entrepreneurship is considered an important instrument for the realization of potential among marginal and deprived communities isolated from the mainstream economy and is necessary for bringing social upliftment. Cultural values, shared resources, linkages, and mutual trust work for the community, nurtured through close personal relations for the functioning of economic activities. Entrepreneurial activities creating local public goods for a community have a comparative advantage over the absolute market-oriented activities.`,
  },
]

const WhyUs: React.FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <h2 className={styles.title}>
          why <span style={{ whiteSpace: 'nowrap' }}> us ? </span>
        </h2>
        <ul className={clsx(styles.imageGrid, styles.s)}>
          {arr.map((e, ind) => (
            <li className={styles.el} key={ind}>
              <h3>
                {e.title.split(' ').map((e, ind) => (
                  <span key={ind}>
                    {e} <br />
                  </span>
                ))}
              </h3>
              <p> {e.text} </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyUs
