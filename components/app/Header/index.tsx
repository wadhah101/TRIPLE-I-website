import Link from 'next/link'
import * as React from 'react'
import { navElements } from '../../../data/nav.data'
import NavLink from '../../template/NavLink'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import styles from './header.module.scss'
import navStyles from './nav.anchor.module.scss'
import clsx from 'clsx'

const Header: React.FunctionComponent = () => {
  const [white, setWhite] = React.useState(false)

  React.useEffect(() => {
    let last_known_scroll_position = 0
    let ticking = false
    const tripping = window.innerHeight * 0.75

    function doSomething(scroll_pos: number) {
      if (scroll_pos > tripping && !white) {
        setWhite(true)
      } else if (scroll_pos <= tripping && white) {
        setWhite(false)
      }
    }

    window.addEventListener('scroll', () => {
      last_known_scroll_position = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position)
          ticking = false
        })
        ticking = true
      }
    })
  }, [white])

  return (
    <header className={clsx({ [styles.white]: white }, styles.header)}>
      <div className={styles.container}>
        <Link passHref href="/">
          <a className={styles.logo}>
            <Image alt="event icon" unsized src="/favicon.webp" />
          </a>
        </Link>
        <div className={styles.spacer} />
        <nav className={styles.nav}>
          {navElements.map(({ href, name }) => (
            <NavLink activeClassName={navStyles.active} key={href} href={href}>
              <a className={navStyles.navAnchor}>
                <span>{name}</span>
              </a>
            </NavLink>
          ))}
        </nav>
        <div className={styles.menu}>
          <FaBars />
        </div>
      </div>
    </header>
  )
}

export default Header
