import clsx from 'clsx'
import dayjs, { Dayjs } from 'dayjs'
import * as React from 'react'
import BannerWithImage from '../../../template/BannerWithImage'
import styles from './style.module.scss'
import * as fa from 'react-icons/fa'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const openingCeremonyDate = dayjs('2020-11-21T12:00:00.000Z')
const openingCeromonyLink =
  'https://ieeemeetings.webex.com/mw3300/mywebex/default.do?nomenu=true&siteurl=ieeemeetings&service=6&rnd=0.27666717212039305&main_url=https%3A%2F%2Fieeemeetings.webex.com%2Fec3300%2Feventcenter%2Fevent%2FeventAction.do%3FtheAction%3Ddetail%26%26%26EMK%3D4832534b00000004f7030167eb9c3ce18d336be6508e88f536546cd44e41ea7ef8495a9020386880%26siteurl%3Dieeemeetings%26confViewID%3D178451193071144631%26encryptTicket%3DSDJTSwAAAAQT9rpQH91Tp-rIzrbek5RBDV84YhciHM_uLFcYn6Ug-Q2%26'
const pitchEventDate = dayjs('2020-11-22T07:30:00.000Z')
// TODO
const pitchEventLink = ''

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
  const [openingCountdown, setOpeningCountdown] = React.useState<DataDay[]>(
    init
  )
  const isOpeningMoment = isDataDaysZero(openingCountdown)
  const [pitchCountdown, setPitchCountdown] = React.useState<DataDay[]>(init)
  const isPitchMoment = isDataDaysZero(pitchCountdown)

  React.useEffect(() => {
    dayjs.extend(duration)
    const interval = setInterval(() => {
      const newArropeningCeremonyDate = dateDiffFactory(
        dayjs(),
        openingCeremonyDate
      )
      const newpitchEventDate = dateDiffFactory(dayjs(), pitchEventDate)
      setOpeningCountdown(newArropeningCeremonyDate)
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
          WE ARE LAUNCHING
        </h1>
        <div className="grid grid-rows-2 gap-3 text-center md:grid-rows-none md:grid-cols-2 ">
          <div className="flex flex-col items-center px-3 py-6 bg-white rounded-md bg-opacity-10">
            <h2 className="text-2xl font-bold">OPENING CERMONY</h2>
            <p className="mt-2">
              Access to panel sessions and opening ceremony
            </p>
            {/* countdown */}
            {!isOpeningMoment && (
              <React.Fragment>
                <p className="mt-2 text-lg font-medium underline">Opens In :</p>

                <div>
                  {openingCountdown.map((e) => (
                    <span key={e.text}>
                      {e.value}&nbsp;
                      {e.text}&nbsp;&nbsp;&nbsp;
                    </span>
                  ))}
                </div>
              </React.Fragment>
            )}

            <p className="mt-2 font-medium text-opacity-80">
              Password for attendees 0000 <br /> Password for panelists 00000
            </p>

            <a
              href={isOpeningMoment ? openingCeromonyLink : null}
              title="opening ceromony link"
              target="_blank"
              rel="noreferrer"
              className={clsx(
                { [styles.disabled]: !isOpeningMoment },
                'grid justify-center items-center gap-2 grid-flow-col-dense w-full px-8 py-2 mt-3 font-bold duration-300 rounded-md shadow md:w-auto hover:bg-main-500 bg-main-400'
              )}
            >
              <fa.FaExternalLinkAlt />
              <span>LINK</span>
            </a>
          </div>

          {/* pitch */}
          <div className="flex flex-col items-center px-3 py-6 bg-white rounded-md bg-opacity-10">
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

            <p className="mt-2 font-medium text-opacity-80">
              Password for attendees 0000 <br /> Password for panelists 00000
            </p>

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
