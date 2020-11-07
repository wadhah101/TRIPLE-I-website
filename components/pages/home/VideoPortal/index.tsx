import * as React from 'react'
import { Portal } from 'react-portal'
import styles from './video.portal.module.scss'
import ReactPlayer from 'react-player/lazy'
import { appContext } from '../../../../pages/_app'
import { useOnClickOutside } from '../../../../lib/onClickOutsideHook'

const url = 'https://youtu.be/uM7CJ0WLvwg'

const VideoPortal: React.FunctionComponent = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { setVideoOpen } = React.useContext(appContext)
  useOnClickOutside(ref, () => {
    setVideoOpen(false)
  })

  return (
    <Portal>
      <div className={styles.wrapper}>
        <div ref={ref} className={styles.container}>
          <ReactPlayer width="100%" height="100%" controls url={url} />
        </div>
      </div>
    </Portal>
  )
}

export default VideoPortal
