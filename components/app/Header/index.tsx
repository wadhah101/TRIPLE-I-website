import Link from 'next/link'
import * as React from 'react'
import { navElements } from '../../../data/nav.data'
import NavLink from '../../template/NavLink'
import styles from './header.module.scss'
import navStyles from './nav.anchor.module.scss'
import clsx from 'clsx'
import * as fi from 'react-icons/fi'
import { useOnClickOutside } from '../../../lib/onClickOutsideHook'

const Header: React.FunctionComponent = () => {
  const [white, setWhite] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLTableHeaderCellElement>(null)
  useOnClickOutside(ref, () => setOpen(false))

  React.useEffect(() => {
    let last_known_scroll_position = 0
    let ticking = false
    const tripping =
      window.innerWidth > 768
        ? window.innerHeight * 0.75
        : window.innerHeight * 0.5

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
    <header
      ref={ref}
      className={clsx({ [styles.white]: white || open }, styles.header)}
    >
      <div className={styles.container}>
        <Link passHref href="/">
          <a className={styles.logo}>
            <img alt="event icon" src="/favicon.webp" />
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
        <div onClick={() => setOpen((e) => !e)} className={styles.menuIcon}>
          <fi.FiMenu />
        </div>
      </div>
      {open && (
        <nav className={styles.navMobile}>
          {navElements.map(({ href, name }) => (
            <NavLink activeClassName={navStyles.active} key={href} href={href}>
              <a onClick={() => setOpen(false)} className={navStyles.navAnchor}>
                <span>{name}</span>
              </a>
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
