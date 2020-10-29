import * as React from 'react'
import styled from 'styled-components'
import * as Template from '../../template/template'
import { FaYoutube } from 'react-icons/fa'
import { up } from 'styled-breakpoints'

const Wrapper = styled.div`
  position: relative;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100vh;
  background: url('/suit1.webp') center center no-repeat;
  background-attachment: fixed;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000050;
  }
`

const Container = styled(Template.Container)`
  display: flex;
  margin: 0;
  z-index: 3;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 5vh;
`
const Title = styled.h1`
  ${up('md')} {
    font-size: 4rem;
  }
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 130%;
  letter-spacing: 2px;
  font-weight: 700;
`

const Bigger = styled.span`
  ${up('md')} {
    font-size: 6.5rem;
  }
  font-size: 3.5rem;
  line-height: 110%;
`

const Subtitle = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  ${up('md')} {
    margin-top: 0.75rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
`

const Interact = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: row dense;
  gap: 0.5rem;
  ${up('md')} {
    grid-auto-flow: column dense;
    gap: 1.5rem;
  }
`
export const JoinButton = styled.a`
  display: inline-block;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 0.25rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.main};
`

const Or = styled.span``

const VideoButton = styled.button`
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.75rem;
    font-size: 2rem;
  }
`

const Banner: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          Tunisia Entrepreneurship
          <br />
          Summit :<br /> <Bigger>Triple I</Bigger>
        </Title>
        <Subtitle> November 20-2020&nbsp;&nbsp;|&nbsp;&nbsp;online </Subtitle>

        <Interact>
          <JoinButton href="https://www.google.com/" target="_blank">
            SIGN UP
          </JoinButton>
          <Or> or </Or>
          <VideoButton>
            <FaYoutube /> Watch The Trailer
          </VideoButton>
        </Interact>
      </Container>
    </Wrapper>
  )
}

export default Banner
