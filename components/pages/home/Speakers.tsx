import * as React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import * as Template from '../../template/template'

import { FaFacebookF, FaLinkedin } from 'react-icons/fa'

const hiba = {
  firstName: 'Hiba',
  lastName: 'Mezni',
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
  margin-bottom: 2rem;
  text-transform: uppercase;
`

const ImageGrid = styled.div`
  display: grid;
  gap: 2rem;
  ${up('md')} {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 2rem;
  }
`

const Element = styled.div`
  display: grid;
  h4 {
    margin-top: 1rem;
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 95%;
  }
  p {
    color: #00000080;
  }

  &:hover .a {
    transform: translateY(0);
  }

  &:hover img {
    filter: grayscale(0);
  }
`

const ElementImage = styled.div`
  position: relative;
  overflow: hidden;
  img {
    position: relative;
    z-index: 3;
    transition: all ease 0.3s;
    width: 100%;
    filter: grayscale(1);
  }
`

const ElementSocial = styled.div`
  position: absolute;
  color: white;
  bottom: 0;
  width: 100%;
  background: #00000080;
  padding: 1rem 0;
  z-index: 5;
  transition: transform ease-in-out 0.2s;
  grid-auto-flow: column dense;
  font-size: 1.5rem;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${up('md')} {
    transform: translateY(100%);
  }
`

const Speakers: React.FunctionComponent = () => {
  return (
    <Container>
      <Title> speakers </Title>
      <ImageGrid>
        {arr.map((e) => (
          <Element key={e.id}>
            <ElementImage>
              <img src={e.picture} />
              <ElementSocial className="a">
                <a href={e.social.linkedin} rel="noreferrer" target="_blank">
                  <FaLinkedin />
                </a>
                <a href={e.social.linkedin} rel="noreferrer" target="_blank">
                  <FaFacebookF />
                </a>
              </ElementSocial>
            </ElementImage>
            <h4>
              {e.firstName} <br /> {e.lastName}
            </h4>
            <p> {e.position} </p>
          </Element>
        ))}
      </ImageGrid>
    </Container>
  )
}

export default Speakers
