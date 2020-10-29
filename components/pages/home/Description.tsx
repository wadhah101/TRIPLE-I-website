import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'
import * as Template from '../../template/template'
import { JoinButton } from './Banner'
import Countdown from './Countdown'
import { FiLink } from 'react-icons/fi'
import Link from 'next/link'

const Wrapper = styled.div`
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
  color: #00000080;
  line-height: 170%;
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

const Description: React.FunctionComponent = () => {
  return (
    <Template.Container>
      <Wrapper>
        <Title>
          about the <br /> <Important>Event</Important>
        </Title>
        <Countdown />
        <Writing>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          est beatae, nobis reiciendis dolor delectus rem tenetur, aliquid ipsam
          tempore explicabo praesentium mollitia cum. Nam modi architecto ipsa
          illum, id quod accusamus quo delectus nobis nihil voluptas, odio
          aliquid ex sequi animi iste exercitationem omnis debitis dolorem a?
          Ipsam cumque nihil architecto consequatur? Atque aut porro officiis
          perferendis exercitationem nobis saepe consequatur iste ratione
          delectus doloremque eum voluptatem culpa dolor optio, expedita officia
          sequi voluptate, soluta eveniet sit quis debitis. Beatae facere dicta
          nam sint? Natus ab ullam cumque ipsam quos laudantium tenetur velit
          debitis odio obcaecati, rerum nisi harum.
        </Writing>
        <Link href="/challenge" passHref>
          <ChallengeLink>
            <FiLink /> check the challenge page for more info
          </ChallengeLink>
        </Link>

        <BigJoinButton> JOIN US, FILL THE FORM !</BigJoinButton>
      </Wrapper>
    </Template.Container>
  )
}

export default Description
