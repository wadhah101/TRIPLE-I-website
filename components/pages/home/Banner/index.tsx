import * as React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { appContext } from '../../../../pages/_app'
import styles from './Banner.module.scss'

const Banner: React.FunctionComponent = () => {
  const { setVideoOpen } = React.useContext(appContext)

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          TUNISIA ENTREPRENEURSHIP <br />
          SUMMIT :<br /> <span className={styles.bigger}>TRIPLE I</span>
        </h1>
        <h2 className={styles.subtitle}>
          November 20-2020&nbsp;&nbsp;|&nbsp;&nbsp;online
        </h2>

        <div className={styles.interact}>
          <a
            className={styles.joinButton}
            href="https://www.google.com/"
            rel="noreferrer"
            target="_blank"
          >
            CHECK THE CHALLENGE
          </a>
          <span> or </span>
          <button
            onClick={() => setVideoOpen(true)}
            className={styles.videoButton}
          >
            <FaYoutube /> Watch The Trailer
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
