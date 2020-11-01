import * as React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

const placeholder =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos eius error enim officiis, voluptatum saepe nostrum ea? Accusantium quaerat nisi vitae optio eos autem, consequatur facere sed magnam labore!'

const arr = [
  { name: 'innovation', text: placeholder, image: '/home/innov.webp' },
  { name: 'industry', text: placeholder, image: '/home/industry.webp' },
  { name: 'infrastructure', text: placeholder, image: '/home/infra.webp' },
]

const Container = styled.section`
  color: #fff;
`

const Grid = styled.div`
  display: grid;
  ${up('md')} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const Element = styled.div<{ url: string }>`
  position: relative;
  background: url(${({ url }) => url}) center center no-repeat;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    content: '';
    background: #00000080;
  }
  width: 100%;
`

const ElementWriting = styled.div`
  padding: 8rem 2rem;
  width: 100%;

  position: relative;
  z-index: 3;
  display: grid;
  text-align: center;
  h3 {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 2rem;
    line-height: 120%;
  }

  h3::first-letter {
    /* font-size: 4rem; */
    color: ${({ theme }) => theme.colors.mainLight};
  }
`

const Standing: React.FunctionComponent = () => {
  return (
    <Container>
      <Grid>
        {arr.map(({ name, text, image }) => (
          <Element url={image} key={name}>
            <ElementWriting>
              <h3> {name} </h3>
              <p> {text} </p>
            </ElementWriting>
          </Element>
        ))}
      </Grid>
    </Container>
  )
}

export default Standing
