import styled, { css } from 'styled-components'

const initWidth = 50

export const navAnchorInit = css`
  transition: all ease 0.3s;
  content: '';
  position: absolute;
  bottom: 0px;
  left: ${(100 - initWidth) / 2}%;
  width: ${initWidth}%;
  height: 4px;
  background: transparent;
`

const navAnchorUnderLine = css`
  background: ${({ theme }) => theme.colors.accent};
  left: -0.25rem;
  width: calc(100% + 0.5rem);
`

export const NavAnchor = styled.a`
  font-size: 1rem;
  transition: all ease 0.3s;
  position: relative;
  display: block;
  height: ${({ theme }) => theme.dimension.header.desktop}rem;
  display: flex;
  letter-spacing: 1px;
  align-items: center;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &::after {
    ${navAnchorInit}
  }

  &:hover:not(.active) {
    color: ${({ theme }) => theme.colors.accent};
  }
  &.active {
    ::after {
      ${navAnchorUnderLine}
    }
  }
  box-sizing: border-box;
`
