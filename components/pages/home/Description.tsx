import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'
import * as Template from '../../template/template'
import { JoinButton } from './Banner'
import Countdown from './Countdown'
import { FiLink } from 'react-icons/fi'
import Link from 'next/link'

const Wrapper = styled.section`
  padding: 12vh 0;
  ${up('md')} {
    width: 60%;
  }
  margin: auto;
`

const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  line-height: 135%;
  text-transform: uppercase;

  ${up('md')} {
    font-size: 4rem;
    line-height: 130%;
  }
`
const Important = styled.span`
  font-size: 5.3rem;
  color: ${({ theme }) => theme.colors.main};
  ${up('md')} {
    font-size: 7rem;
  }
`

const Writing = styled.p`
  color: #000000a0;
  line-height: 170%;
  margin-top: 0.75rem;
  /* font-weight: 500; */
`

const BigJoinButton = styled(JoinButton)`
  color: white;
  text-align: center;
  ${down('md')} {
    width: 100%;
  }
`
const ChallengeLink = styled.a`
  display: grid;
  align-items: center;
  justify-content: start;
  gap: 0.75rem;
  grid-auto-flow: column dense;
  font-size: 1.125rem;
  transition: all ease 200ms;
  &:hover {
    color: ${({ theme }) => theme.colors.main};
    text-decoration: underline;
  }
  margin: 1rem 0;
`

const StrongMain = styled.strong`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainLight};
`

const Description: React.FunctionComponent = () => {
  return (
    <Template.Container>
      <Wrapper>
        <Title>
          about the <br /> <Important>Event</Important>
        </Title>
        <Countdown />
        <Writing>
          Getting into the entrepreneurial world is a risky adventure full of
          difficulties, especially for young entrepreneurs lacking technical
          skills, business intelligence and funds. Therefore, highlighting its
          motto&nbsp;
          <StrongMain>&quot;Advancing Technology For Humanity&quot;</StrongMain>
          , IEEE R8 organization launched a very promising initiative known as
          the IEEE R8 Entrepreneurship Initiative, aiming at strengthening the
          knowledge of young entrepreneurs and exposing them to the IEEE wide
          network. In order to reach this goal, IEEE R8 is relying on its very
          unique and strong entrepreneurship ecosystem consisting of a variety
          of technical foundations and organizational units. The IEEE R8
          entrepreneurship initiative was the best chance for us as youth to
          make a change and that’s why we decided to organize the&nbsp;
          <StrongMain>
            “Tunisia Entrepreneurship Summit: Industry innovation and
            Infrastructure (3I) ”
          </StrongMain>
          &nbsp; It will be a two-day summit which encompasses various panel
          sessions, workshops and mentorship for the future entrepreneurs about
          the technical and soft skills needed to build a business and to make
          their ideas get developed and see the light, and also a pitch
          competition for teams with innovation, startups and small business
          owners.
        </Writing>
        <Writing>
          The event will be held in the entrepreneurship week along with other
          similar event(s) from this initiative since we believe that we need to
          cover all the Tunisian territory and we want the participants to have
          various themes for the competition. There will be 3 winners from the
          competition who will be selected to participate in the YP summit to
          pitch their ideas.
        </Writing>
        <Link href="/challenge" passHref>
          <ChallengeLink>
            <FiLink /> check the challenge page for more info
          </ChallengeLink>
        </Link>

        <BigJoinButton
          href="https://www.google.com/"
          rel="noreferrer"
          target="_blank"
        >
          JOIN US, FILL THE FORM !
        </BigJoinButton>
      </Wrapper>
    </Template.Container>
  )
}

export default Description
