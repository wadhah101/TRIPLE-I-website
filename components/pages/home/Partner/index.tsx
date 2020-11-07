import * as React from 'react'
import styles from './partner.module.scss'

const el = {
  name: 'IEEE TUNISIA SECTION',
  href: 'https://ieee.tn/',
  image: '/ieee-tunisia-section.jpg',
}

const arr = new Array<typeof el>(3).fill(el)

const Partners: React.FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <p className={styles.subtitle}> SPECIAL THANKS TO OUR </p>
        <h2 className={styles.baseTitle}> PARTNERS </h2>
        <div className={styles.imageGrid}>
          {arr.map((e, ind) => (
            <a
              rel="noreferrer"
              target="_blank"
              href={e.href}
              className={styles.el}
              key={ind}
            >
              <img key={ind} alt={e.name} src={e.image} />
              <h3> {e.name} </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
