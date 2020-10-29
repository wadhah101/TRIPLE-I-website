import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import * as Template from '../../template/template'
import Countdown from './Countdown'

const Wrapper = styled.div`
  padding: 12vh 0;
  width: 60%;
  ${up('md')} {
    width: 60%;
  }
  margin: auto;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  line-height: 130%;
  text-transform: uppercase;
`
const Important = styled.span`
  font-size: 7rem;
  color: ${({ theme }) => theme.colors.main};
`

const Writing = styled.p`
  color: #00000080;
  line-height: 170%;
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
      </Wrapper>
    </Template.Container>
  )
}

export default Description
