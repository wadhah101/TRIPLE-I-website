import * as Template from '../../template/template'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 10vh 0;
`

const Container = styled(Template.Container)``

const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainLight};
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
`
const Title = styled(Template.Title)``

const Sponsors: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Subtitle> MADE POSSIBLE THANKS TO OUR </Subtitle>
        <Title> SPONSORS </Title>
      </Container>
    </Wrapper>
  )
}

export default Sponsors
