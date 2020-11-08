import * as React from 'react'
import BannerWithImage from '../../../template/BannerWithImage'
import styles from './banner.module.scss'

const imageUrl = 'challenge.webp'

const Banner: React.FunctionComponent = () => {
  return (
    <BannerWithImage imageUrl={imageUrl}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          ARE YOU UP <br /> TO THE <br />
          <span className={styles.bigger}> CHALLENGE ?</span>
        </h1>
      </div>
    </BannerWithImage>
  )
}

export default Banner
