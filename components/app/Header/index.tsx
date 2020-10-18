import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import { inscriptionLink, navElements } from '../../../data/nav.data'
import NavLink from '../../template/NavLink'
import Img from 'react-optimized-image'
import EventLogo from '../../../public/favicon.webp'
import * as Template from '../../template/template'

const StyledHeader = styled.header`
  background: white;
  font-weight: 500;
  border-bottom: 1px solid #bfbfbf;
  font-size: 0.75rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`

const Container = styled(Template.Container)`
  display: flex;
  align-items: center;
`
const initWidth = 50

const NavAnchor = styled.a`
  position: relative;
  display: block;
  height: ${({ theme }) => theme.dimension.header.desktop}rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.08rem;
  font-weight: 500;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &::after {
    transition: all ease 0.3s;
    content: '';
    position: absolute;
    bottom: -1px;
    left: ${(100 - initWidth) / 2}%;
    width: ${initWidth}%;
    height: 0.25rem;
    background: transparent;
  }

  &:hover,
  &.active {
    color: #121212;
    ::after {
      background: ${({ theme }) => theme.colors.accent};
      left: -0.25rem;
      width: calc(100% + 0.5rem);
    }
  }
  box-sizing: border-box;
`

const Nav = styled.nav`
  display: flex;
  text-transform: uppercase;
  color: #5b5b5b;
`

const Logo = styled.a`
  height: ${({ theme }) => theme.dimension.header.desktop}rem;
  display: flex;
  align-items: center;
  margin-right: 1.75rem;
  picture {
    height: 60%;
    img {
      height: 100%;
    }
  }
`

const Inscription = styled.a`
  position: relative;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.12rem;
  transition: all ease 0.3s;
  text-transform: capitalize;
  color: #121212;
  padding: 0.75rem 1rem;
  &::after {
    z-index: -1;
    transition: all ease 0.3s;
    content: '';
    position: absolute;
    bottom: -1px;
    left: -5%;
    width: 110%;
    height: 0;
    background: transparent;
  }

  &:hover {
    color: white;
    ::after {
      background: ${({ theme: { colors } }) => colors.main};
      height: 100%;
    }
  }
`

const Spacer = styled.div`
  flex: 1 1 0;
`

const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <Container>
        <Link passHref href="/">
          <Logo>
            <Img src={EventLogo} />
          </Logo>
        </Link>

        <Nav>
          {navElements.map(({ href, name }) => (
            <NavLink key={href} href={href}>
              <NavAnchor>
                <span>{name}</span>
              </NavAnchor>
            </NavLink>
          ))}
        </Nav>

        <Spacer />

        <NavLink href={inscriptionLink.href}>
          <Inscription>
            <span>{inscriptionLink.name}</span>
          </Inscription>
        </NavLink>
      </Container>
    </StyledHeader>
  )
}

export default Header
