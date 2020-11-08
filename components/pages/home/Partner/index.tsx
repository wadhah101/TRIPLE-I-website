import * as React from 'react'
import styles from './partner.module.scss'

const el = {
  name: 'IEEE TUNISIA SECTION',
  href: 'https://ieee.tn/',
  image: '/ieee-tunisia-section.jpg',
}

const eniso = {
  name: 'IEEE ENISO student branch',
  href: 'https://eniso.ieee.tn/',
  image: '/commite/eniso.webp',
}

const insat = {
  name: 'IEEE INSAT student branch',
  href: 'https://insat.ieee.tn/',
  image: '/commite/insat.webp',
}

const partners = new Array<typeof el>(3).fill(el)
const commite = [insat, eniso]

const Partners: React.FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* commite */}
        <div className={styles.commite}>
          <p className={styles.subtitle}> BROUGHT TO YOU BY OUR </p>
          <h2 className={styles.baseTitle}> COMMITES </h2>
          <div className={styles.imageGrid}>
            {commite.map((e, ind) => (
              <a
                rel="noreferrer"
                target="_blank"
                href={e.href}
                className={styles.el}
                key={ind}
              >
                <div className={styles.imgFilltoCenter}>
                  <img loading="lazy" alt={e.name} src={e.image} />
                </div>
                <h3> {e.name} </h3>
              </a>
            ))}
          </div>
        </div>

        {/* commite */}
        <div className={styles.separator} />
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
