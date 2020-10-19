import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0rem 1.5rem;
`

export const Page = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  background: #f7f7f5;
  padding-top: ${({ theme }) => theme.dimension.header.desktop}rem;
`
