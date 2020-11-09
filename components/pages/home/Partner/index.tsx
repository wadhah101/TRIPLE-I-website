import * as React from 'react'
import styles from './partner.module.scss'
import { useAnalytics } from 'use-analytics'

const el = {
  name: 'IEEE TUNISIA SECTION',
  href: 'https://ieee.tn/',
  image: '/ieee-tunisia-section.jpg',
}

const partners = new Array<typeof el>(3).fill(el)

const Partners: React.FunctionComponent = () => {
  const { track } = useAnalytics()

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* partners */}
        <div>
          <p className={styles.subtitle}> SPECIAL THANKS TO OUR </p>
          <h2 className={styles.smallerTitle}> PARTNERS </h2>
          <div className={styles.imageGrid}>
            {partners.map((e, ind) => (
              <a
                rel="noreferrer"
                target="_blank"
                href={e.href}
                className={styles.el}
                key={ind}
                title={e.name}
                onClick={() => track(`${e.name} link click`)}
              >
                <img loading="lazy" alt={e.name} src={e.image} />
                <h3> {e.name} </h3>
              </a>
            ))}
          </div>
        </div>

        {/* partners */}
      </div>
    </section>
  )
}

export default Partners
