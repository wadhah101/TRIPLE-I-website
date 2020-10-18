import styled from 'styled-components'
import { socialElements } from '../../../data/social.data'
import * as Template from '../../template/template'

const StyledFooter = styled.footer`
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
  margin-bottom: 1rem;
`
const BiggerTitle = styled.span`
  font-size: 5rem;
  line-height: 115%;
`

const Info = styled.div``

const SocialDiv = styled.div`
  margin-left: 0.25rem;
  display: flex;
  align-items: center;
`

const SocialAnchor = styled.a`
  border: 1px solid white;
  padding: 0.75rem;
  font-size: 1.35rem;
  transition: all ease 0.4s;
  &:not(:last-child) {
    border-right: none;
  }
  &:hover {
    color: #000;
    background: white;
  }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Info>
          <Title>
            Tunisia Entrepreneurship <br /> Summit
            <br /> <BiggerTitle>Triple I</BiggerTitle>
          </Title>

          <SocialDiv>
            {socialElements.map((e) => (
              <SocialAnchor
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                key={e.href}
              >
                <e.icon />
              </SocialAnchor>
            ))}
          </SocialDiv>
        </Info>
      </Container>
    </StyledFooter>
  )
}

export default Footer
