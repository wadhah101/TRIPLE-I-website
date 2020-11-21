import clsx from 'clsx'
import dayjs, { Dayjs } from 'dayjs'
import * as React from 'react'
import BannerWithImage from '../../../template/BannerWithImage'
import styles from './style.module.scss'
import * as fa from 'react-icons/fa'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const pitchEventDate = dayjs('2020-11-22T07:30:00.000Z')
const pitchEventLink = 'https://meet.google.com/vpc-hyip-xau'

class DataDay {
  constructor(public value: number, public text: string) {}
}

// opening ceremony
// pitching day

const image = '/access.webp'

const init = [
  new DataDay(0, 'day'),
  new DataDay(0, 'hours'),
  new DataDay(0, 'minutes'),
  new DataDay(0, 'seconds'),
]

const dateDiffFactory = (current: Dayjs, event: Dayjs) => {
  const diff = dayjs.duration(event.diff(current))
  return [
    new DataDay(diff.days() % 7, 'day'),
    new DataDay(diff.hours(), 'hours'),
    new DataDay(diff.minutes(), 'minutes'),
    new DataDay(diff.seconds(), 'sec'),
  ].map((e) => ({ ...e, value: Math.max(0, e.value) }))
}

const isDataDaysZero = (e: DataDay[]) => e.every((e) => e.value === 0)

const AccessBanner: React.FunctionComponent = () => {
  const [pitchCountdown, setPitchCountdown] = React.useState<DataDay[]>(init)
  const isPitchMoment = isDataDaysZero(pitchCountdown)

  React.useEffect(() => {
    dayjs.extend(duration)
    const interval = setInterval(() => {
      const newpitchEventDate = dateDiffFactory(dayjs(), pitchEventDate)
      setPitchCountdown(newpitchEventDate)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <BannerWithImage opacity={0.25} imageUrl={image}>
      <div className={clsx(styles.baseContainer, 'z-10 flex flex-col w-full')}>
        <h1 className={clsx(styles.baseTitle, ' md:pt-0 pt-16')}>
          WE ARE LAUNCHING !
        </h1>
        <div className="flex flex-col w-full text-center md:items-center ">
          {/* pitch */}
          <div className="flex flex-col items-center px-3 py-6 bg-white rounded-md md:px-12 bg-opacity-10">
            <h2 className="text-2xl font-bold">PITCH SESSION</h2>
            <p className="mt-2">Access to the pitch session</p>
            {/* countdown */}
            {!isPitchMoment && (
              <React.Fragment>
                <p className="mt-2 text-lg font-medium underline">Opens In :</p>

                <div>
                  {pitchCountdown.map((e) => (
                    <span key={e.text}>
                      {e.value}&nbsp;
                      {e.text}&nbsp;&nbsp;&nbsp;
                    </span>
                  ))}
                </div>
              </React.Fragment>
            )}

            <a
              href={isPitchMoment ? pitchEventLink : null}
              title="opening ceromony link"
              target="_blank"
              rel="noreferrer"
              className={clsx(
                { [styles.disabled]: !isPitchMoment },
                'grid justify-center items-center grid-flow-col-dense gap-2 w-full px-8 py-2 mt-3 font-bold duration-300 rounded-md shadow md:w-auto hover:bg-main-500 bg-main-400'
              )}
            >
              <fa.FaExternalLinkAlt />
              <span>LINK</span>
            </a>
          </div>
        </div>
      </div>
    </BannerWithImage>
  )
}

export default AccessBanner
