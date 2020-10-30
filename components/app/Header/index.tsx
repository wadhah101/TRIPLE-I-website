import Link from 'next/link'
import * as React from 'react'
import styled, { css } from 'styled-components'
import { navElements } from '../../../data/nav.data'
import NavLink from '../../template/NavLink'
import * as Template from '../../template/template'
import { NavAnchor } from './NavAnchor'
import Image from 'next/image'
import { up } from 'styled-breakpoints'
import { FaBars } from 'react-icons/fa'

const whiteMode = css`
  background: #000000dd;
  padding: 0;
  position: fixed;
`

const BaseHeader = styled.header`
  background: transparent;
  padding: 1rem 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  color: #fff;
  transition: all ease 0.5s;
`

const AdaptiveHeader = styled(BaseHeader)<{ white: boolean }>`
  ${({ white }) => (white ? whiteMode : null)};
`

const Container = styled(Template.Container)`
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  display: none;
  text-transform: uppercase;
  ${up('md')} {
    display: flex;
  }
`
const Menu = styled.div`
  ${up('md')} {
    display: none;
  }
  font-size: 1.5rem;
`
const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-right: 1.75rem;
  img {
    height: ${({ theme }) => theme.dimension.header.desktop - 1.5}rem;
  }
`
const Spacer = styled.div`
  flex: 1;
`

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
    <AdaptiveHeader white={white}>
      <Container>
        <Link passHref href="/">
          <Logo>
            <Image unsized src="/favicon.webp" />
          </Logo>
        </Link>
        <Spacer />
        <Nav>
          {navElements.map(({ href, name }) => (
            <NavLink key={href} href={href}>
              <NavAnchor>
                <span>{name}</span>
              </NavAnchor>
            </NavLink>
          ))}
        </Nav>
        <Menu>
          <FaBars />
        </Menu>
      </Container>
    </AdaptiveHeader>
  )
}

export default Header
