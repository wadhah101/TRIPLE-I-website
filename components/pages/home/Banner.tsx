import * as React from 'react'
import styled from 'styled-components'
import * as Template from '../../template/template'
import { FaYoutube } from 'react-icons/fa'

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
  font-size: 4rem;
  text-transform: uppercase;
  line-height: 130%;
  letter-spacing: 2px;
  font-weight: 700;
`

const Bigger = styled.span`
  font-size: 6.5rem;
  line-height: 110%;
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-bottom: 2rem;
`

const Interact = styled.div`
  display: flex;
  align-items: center;
`

const Join = styled.a`
  display: block;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 0.25rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.main};
`

const Or = styled.span`
  margin: 0 1.5rem;
`

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
          <Join href="https://www.google.com/"> SIGN UP</Join>
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
