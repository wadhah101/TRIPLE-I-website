import * as React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import * as Template from '../../template/template'

const hiba = {
  name: 'Hiba Mezni',
  position: 'IEEE insat chair',
  picture: '/speakers/hiba.jpg',
  social: {
    fb: 'https://www.facebook.com/hiba.mezni.98',
    linkedin: 'https://www.linkedin.com/in/hiba-mezni-4821a8167/',
  },
}

const arr = new Array<typeof hiba>(3).fill(hiba).map((e, id) => ({ ...e, id }))

const Container = styled(Template.Container)`
  padding-top: 12vh;
  padding-bottom: 12vh;
`

const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`

const ImageGrid = styled.div`
  display: grid;
  gap: 2rem;
  ${up('md')} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Element = styled.div`
  display: grid;
  img {
    width: 100%;
  }
`

const Speakers: React.FunctionComponent = () => {
  return (
    <Container>
      <Title> speakers </Title>
      <ImageGrid>
        {arr.map((e) => (
          <Element key={e.id}>
            <img src={e.picture} /> {e.name}
          </Element>
        ))}
      </ImageGrid>
    </Container>
  )
}

export default Speakers
