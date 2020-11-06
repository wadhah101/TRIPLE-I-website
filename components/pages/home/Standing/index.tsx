import * as React from 'react'
import styled from 'styled-components'
import { lorem } from '../../../../pages/_app'
import styles from './standing.module.scss'

const arr = [
  { name: 'innovation', text: lorem, image: '/home/innov.webp' },
  { name: 'industry', text: lorem, image: '/home/industry.webp' },
  { name: 'infrastructure', text: lorem, image: '/home/infra.webp' },
]

const Element = styled.div<{ url: string }>`
  background: url(${({ url }) => url}) center center;
`

const Standing: React.FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {arr.map(({ name, text, image }) => (
          <Element className={styles.el} url={image} key={name}>
            <div className={styles.writing}>
              <h3> {name} </h3>
              <p> {text} </p>
            </div>
          </Element>
        ))}
      </div>
    </section>
  )
}

export default Standing
