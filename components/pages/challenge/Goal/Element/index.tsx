import * as React from 'react'
import styles from './el.module.scss'
interface IElementProps {
  title: string
  text: string
}

const Element: React.FunctionComponent<IElementProps> = ({ title, text }) => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.writing}> {text} </p>
    </div>
  )
}

export default Element
