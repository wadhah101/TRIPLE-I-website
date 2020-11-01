import * as Template from '../../template/template'
import * as React from 'react'
import styled from 'styled-components'
import { lorem } from '../../../pages/_app'
import { up } from 'styled-breakpoints'

const arr = [
  { title: 'experience speaks', text: lorem },
  { title: 'international reach', text: lorem },
  { title: 'community driven', text: lorem },
]

const Wrapper = styled.section`
  width: 100%;
  background: rgb(36, 36, 35);
  padding: 13vh 0;
  color: white;
  text-align: center;
`

const Container = styled(Template.Container)``

const Title = styled(Template.Title)``

const Grid = styled.ul`
  display: grid;
  column-gap: 2rem;
  row-gap: 2rem;
  ${up('md')} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Element = styled.li`
  h3 {
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainLight};
    font-size: 2.25rem;
    line-height: 115%;
    margin-bottom: 1rem;
  }
`

const WhyUs: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Title> why us ?</Title>
        <Grid>
          {arr.map((e, ind) => (
            <Element key={ind}>
              <h3> {e.title} </h3> <p> {e.text} </p>{' '}
            </Element>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default WhyUs
