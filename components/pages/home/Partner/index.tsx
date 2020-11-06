import * as React from 'react'
import styles from './partner.module.scss'

const Sponsors: React.FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <p className={styles.subtitle}> SPECIAL THANKS TO OUR </p>
        <h2 className={styles.baseTitle}> PARTNERS </h2>
      </div>
    </section>
  )
}

export default Sponsors
