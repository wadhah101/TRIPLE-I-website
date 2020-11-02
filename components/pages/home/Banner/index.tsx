import * as React from 'react'
import styled from 'styled-components'
import { FaYoutube } from 'react-icons/fa'
import styles from './Banner.module.scss'

export const JoinButton = styled.a`
  display: inline-block;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 0.25rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.main};
`

const Banner: React.FunctionComponent = () => {
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
            SIGN UP
          </a>
          <span> or </span>
          <button className={styles.videoButton}>
            <FaYoutube /> Watch The Trailer
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
