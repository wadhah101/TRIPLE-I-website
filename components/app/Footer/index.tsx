import styled from 'styled-components'
import * as Template from '../../template/template'

const StyledFooter = styled.footer`
  background: #898989;
  padding: 8vh 0;
  color: white;
`

const Container = styled(Template.Container)``

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container> footer </Container>
    </StyledFooter>
  )
}

export default Footer
