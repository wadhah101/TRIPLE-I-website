import { socialElements } from '../../../data/social.data'
import styles from './footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>
            Tunisia Entrepreneurship <br /> Summit
            <br /> <span className={styles.bigger}>Triple I</span>
          </h2>

          <div>
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
          <div className={styles.writingContainer}>
            <p>© 2020 IEEE INSAT , IEEE ENISO, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
