import * as React from 'react'
import styles from './partner.module.scss'
import { useAnalytics } from 'use-analytics'
import clsx from 'clsx'

class Partner {
  public constructor(
    public name: string,
    public href: string,
    public image: string
  ) {}
}

const partners = [
  new Partner(
    'She Starts',
    'https://www.shestarts.com/s',
    '/partners/she_starts.webp'
  ),
  new Partner(
    'IEEE region 8',
    'https://ieeer8.org/',
    '/partners/IEEE-Region-8.webp'
  ),
  new Partner(
    'IEEE young professionals',
    'https://yp.ieee.org/',
    '/partners/IEEE-yp.webp'
  ),
  new Partner('Latis', 'http://www.latis-eniso.org/', '/partners/latis.png'),

  new Partner(
    'IEEE RAS INSAT',
    'https://ras-insat.ieee.tn/',
    '/partners/ras-insat.webp'
  ),
  new Partner('IEEE tunisia section', 'https://ieee.tn/', '/partners/sc.webp'),
  new Partner(
    'IEEE IAS tunisia section',
    'https://ias.ieee.tn/',
    '/partners/ias-sc.webp'
  ),
]

const Partners: React.FunctionComponent = () => {
  const { track } = useAnalytics()

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* partners */}
        <div>
          <p className={styles.subtitle}> SPECIAL THANKS TO OUR </p>
          <h2 className={styles.smallerTitle}> PARTNERS </h2>
          <div className={clsx(styles.imageGrid, styles.r)}>
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
                <div className={styles.imgContainer}>
                  <img loading="lazy" alt={e.name} src={e.image} />
                </div>
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
