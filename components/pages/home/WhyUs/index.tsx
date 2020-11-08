import clsx from 'clsx'
import * as React from 'react'
import { placeholder } from '../../../../pages/_app'
import styles from './whyus.module.scss'

const arr = [
  { title: 'experience speaks', text: placeholder },
  { title: 'international reach', text: placeholder },
  { title: 'community driven', text: placeholder },
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
