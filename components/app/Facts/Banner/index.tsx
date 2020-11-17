import clsx from 'clsx'
import * as React from 'react'
import FactsVideo from '../Video'
import styles from './style.module.scss'
import { useAnalytics } from 'use-analytics'

const FactsBanner: React.FunctionComponent = () => {
  const { track } = useAnalytics()

  return (
    <section
      className={clsx(
        styles['p-header'],
        ' md:grid place-items-center flex-grow'
      )}
    >
      <div className={styles.baseContainer}>
        <div
          className={clsx('grid gap-x-6 gap-y-4', styles['grid-colums-1-2-3'])}
        >
          <div onClick={() => track('region 8 vid')}>
            <FactsVideo />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              A special word from the R8 Entrepreneurship Committe Co-founder
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              doloribus quisquam voluptates quis eaque sint neque commodi maxime
              nostrum odit, atque cum ea mollitia sequi rerum earum. Iste,
              quibusdam eaque!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactsBanner
