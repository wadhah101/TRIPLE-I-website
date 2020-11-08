import { socialElements } from '../../../data/social.data'
import styles from './footer.module.scss'
import * as fa from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>
            Tunisia Entrepreneurship Summit :
            <br /> <span className={styles.bigger}>Triple I</span>
          </h2>
          <p className={styles.mail}>Setting standars for excelence </p>
        </div>
        <div style={{ flex: 1 }} />
        {/* questions , follow  */}
        <div>
          <h3 style={{ marginBottom: '0.5rem' }} className={styles.title}>
            follow us
          </h3>
          {/* social media icons */}
          <div className={styles.social}>
            {socialElements.map((e) => (
              <a
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                key={e.href}
              >
                <e.icon />
              </a>
            ))}
          </div>
          {/* social media icons */}
          {/* emails */}
          <h3
            style={{ marginBottom: '0.25rem', marginTop: '1rem' }}
            className={styles.title}
          >
            contact us
          </h3>
          <p className={styles.mail}>
            <fa.FaMailBulk />
            <span>ieee.insat.sb@gmail.com</span>
          </p>
          <p className={styles.mail}>
            <fa.FaMailBulk />
            <span>ieee.eniso.sb@gmail.com</span>
          </p>
        </div>
      </div>
      <div className={styles.sep} />
      <div className={styles.writingContainer}>
        <p>© 2020 IEEE INSAT , IEEE ENISO, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
