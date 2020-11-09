import * as React from 'react'
import BannerWithImage from '../../../template/BannerWithImage'
import styles from './banner.module.scss'
import * as fa from 'react-icons/fa'

const imageUrl = 'challenge.webp'

const Banner: React.FunctionComponent = () => {
  return (
    <BannerWithImage imageUrl={imageUrl}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          ARE YOU UP <br /> TO THE <br />
          <span className={styles.bigger}> CHALLENGE ?</span>
        </h1>
        <a
          href="/files/tripe-i-specs.pdf"
          target="_blank"
          rel="noreferrer"
          className={styles.cdcButton}
        >
          <span>
            DOWNLOAD SPECIFICATIONS{' '}
            <span style={{ whiteSpace: 'nowrap' }}>( CAHIER DE CHARGE )</span>{' '}
          </span>
          <fa.FaDownload />
        </a>
      </div>
    </BannerWithImage>
  )
}

export default Banner
