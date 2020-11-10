import * as React from 'react'
import Element from './Element'
import styles from './goal.module.scss'

const goal = {
  title: 'OUR GOAL',
  text:
    'To build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation. In fact, economic growth, social development and environment action are heavily dependent on investments in infrastructure, sustainable industrial development and technological progress. In the face of a rapidly changing global economic landscape and increasing inequalities, sustained growth must include industrialization that first, makes opportunities accessible to all people, and second, is supported by innovation and resilient infrastructure.',
}

const why = {
  title: 'WHY?',
  text:
    'The growth of new industries means improvement in the standard of living for many of us. If industries pursue sustainability, this approach will have a positive effect on the environment (increased investment in renewable energy, recycling,.. ) and the quality of life for many people (smart cities, energy and resources efficiency,..) Investment in infrastructure and innovative ingenious solutions are crucial drivers of economic growth and development, as industry develops, it drives an increase of value addition and enhances the application of science, technology and innovation.',
}

const nextStep = {
  title: 'NEXT STEP?',
  text:
    'The growth of new industries means improvement in the standard of living for many of us. If industries pursue sustainability, this approach will have a positive effect on the environment (increased investment in renewable energy, recycling,.. ) and the quality of life for many people (smart cities, energy and resources efficiency,..) Investment in infrastructure and innovative ingenious solutions are crucial drivers of economic growth and development, as industry develops, it drives an increase of value addition and enhances the application of science, technology and innovation.',
}

const arr = [goal, why, nextStep]

const Goal: React.FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {arr.map(({ title, text }) => (
          <Element key={title} text={text} title={title} />
        ))}
      </div>
    </section>
  )
}

export default Goal
