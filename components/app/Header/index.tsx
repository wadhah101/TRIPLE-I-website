import * as React from 'react'
import styled from 'styled-components'
import { inscriptionLink, navElements } from '../../../data/nav.data'
import NavLink from '../../template/NavLink'
import * as Template from '../../template/template'

const StyledHeader = styled.header`
  background: white;
  text-transform: uppercase;
  font-weight: 500;
  border-bottom: 1px solid #bfbfbf;
  font-size: 0.75rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

const Container = styled(Template.Container)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  align-items: center;
  *:first-child {
    justify-self: start;
  }
  *:last-child {
    justify-self: end;
  }
`
const initWidth = 50

const NavAnchor = styled.a`
  position: relative;
  display: block;
  height: ${({ theme }) => theme.dimension.header.desktop}rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.1rem;
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
    ::after {
      background: #daa520;
      left: -0.25rem;
      width: calc(100% + 0.5rem);
    }
  }
  box-sizing: border-box;
`

const Nav = styled.nav`
  display: flex;
`

const Logo = styled.div``

const Inscription = styled(NavAnchor)`
  &::after {
    left: 0;
    width: 100%;
  }
`

const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          {navElements.map((e) => (
            <NavLink key={e.href} href={e.href}>
              <NavAnchor>
                <span>{e.name}</span>
              </NavAnchor>
            </NavLink>
          ))}
        </Nav>
        <Logo> Tiple I </Logo>
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
