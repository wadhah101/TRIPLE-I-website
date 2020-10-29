import * as React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

interface IPictureSeparatorProps {
  pictures: string[]
}

const Container = styled.div<{ count: number }>`
  display: flex;
  > * {
    flex-grow: 1;
  }
`

const StyledImage = styled.img`
  object-fit: cover;
  height: 400px;
  ${down('md')} {
    width: 50%;
  }
`

const PictureSeparator: React.FunctionComponent<IPictureSeparatorProps> = ({
  pictures,
}) => {
  return (
    <Container count={pictures.length}>
      {pictures.map((e) => (
        <StyledImage src={e} key={e} />
      ))}
    </Container>
  )
}

export default PictureSeparator
