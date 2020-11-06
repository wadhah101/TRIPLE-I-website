import * as React from 'react'
import Image from 'next/image'
import styles from './speakers.module.scss'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'

const hiba = {
  firstName: 'Hiba',
  lastName: 'Mezni',
  position: 'IEEE insat chair',
  picture: '/speakers/hiba.jpg',
  social: {
    fb: 'https://www.facebook.com/hiba.mezni.98',
    linkedin: 'https://www.linkedin.com/in/hiba-mezni-4821a8167/',
  },
}

const arr = new Array<typeof hiba>(3).fill(hiba).map((e, id) => ({ ...e, id }))

const Speakers: React.FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.baseTitle}> speakers </h2>
      <div className={styles.imageGrid}>
        {arr.map((e) => (
          <div className={styles.el} key={e.id}>
            <div className={styles.elImage}>
              <Image
                alt={`${e.firstName} ${e.lastName} picture`}
                src={e.picture}
                width={640}
                height={640}
              />
              <div className={styles.elSocial}>
                <a
                  title="linkedin link"
                  href={e.social.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  title="facebook link"
                  href={e.social.fb}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
            <h3>
              {e.firstName.toUpperCase()} <br /> {e.lastName.toUpperCase()}
            </h3>
            <p> {e.position} </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Speakers
