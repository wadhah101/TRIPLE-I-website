import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import { navElements } from '../../../data/nav.data'
import NavLink from '../../template/NavLink'
import * as Template from '../../template/template'
import { NavAnchor } from './NavAnchor'
import Image from 'next/image'

const StyledHeader = styled.header`
  background: transparent;
  padding: 1rem 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  color: #fff;
`

const Container = styled(Template.Container)`
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  text-transform: uppercase;
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
  return (
    <StyledHeader>
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
      </Container>
    </StyledHeader>
  )
}

export default Header
