import * as React from 'react'
import styles from './speakers.module.scss'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { useAnalytics } from 'use-analytics'

const nader = {
  firstName: 'Nader',
  lastName: 'Zouaoui',
  position:
    'CoFounder of a freshly made startup “eDonec, For better Generations”',
  picture: '/speakers/nader.webp',
  social: {
    fb: 'https://www.facebook.com/Nader.Zouaoui1',
    linkedin: 'https://www.linkedin.com/in/nader-zouaoui/',
  },
}

const ahlem = {
  firstName: 'Ahlem',
  lastName: 'Jedidi',
  position: 'Co-Founder of The Women Entrepreneurship Institute',
  picture: '/speakers/ahlem.webp',
  social: {
    fb: 'https://www.facebook.com/ahlem.jedidi',
    linkedin: 'https://www.linkedin.com/in/jedidiahlem/',
  },
}

const afef = {
  firstName: 'Afef Bennani',
  lastName: 'Ben Abdelghani',
  position: 'Associate Professor (Maître de Conférences)',
  picture: '/speakers/nader.webp',
  social: {
    fb: 'https://www.facebook.com/afef.bennani.7',
    linkedin: 'https://www.linkedin.com/in/afef-bennani-ben-abdelghani/',
  },
}

const arr = [nader, ahlem, afef]

const Speakers: React.FunctionComponent = () => {
  const { track } = useAnalytics()

  return (
    <section className={styles.greyBg}>
      <div className={styles.container}>
        <h2 className={styles.title}> speakers </h2>
        <div className={styles.imageGrid}>
          {arr.map((e, ind) => (
            <div className={styles.el} key={ind}>
              {/* images */}
              <div className={styles.elImage}>
                <img
                  loading="lazy"
                  alt={`${e.firstName} ${e.lastName} picture`}
                  src={e.picture}
                />
                <div className={styles.elSocial}>
                  <a
                    title="linkedin link"
                    href={e.social.linkedin}
                    rel="noreferrer"
                    target="_blank"
                    onClick={() => track(`${e.firstName} linkedin click`)}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    title="facebook link"
                    href={e.social.fb}
                    rel="noreferrer"
                    target="_blank"
                    onClick={() => track(`${e.firstName} facebook click`)}
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>
              {/* images */}
              <h3>
                {e.firstName.toUpperCase()} <br /> {e.lastName.toUpperCase()}
              </h3>
              <p> {e.position} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
