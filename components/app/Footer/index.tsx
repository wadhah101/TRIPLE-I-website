import styled from 'styled-components'
import * as Template from '../../template/template'

const StyledFooter = styled.footer`
  z-index: -1;
  position: sticky;
  left: 0;
  bottom: 0;
  background: #000;
  padding: 8vh 0;
  color: white;
`

const Container = styled(Template.Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Title = styled.h2`
  font-size: 1.75rem;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
`
const BiggerTitle = styled.span`
  font-size: 4.5rem;
  line-height: 115%;
`

const Info = styled.div``

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Info>
          <Title>
            Tunisia Entrepreneurship <br /> Summit
            <br /> <BiggerTitle>Triple I</BiggerTitle>
          </Title>
        </Info>
      </Container>
    </StyledFooter>
  )
}

export default Footer
