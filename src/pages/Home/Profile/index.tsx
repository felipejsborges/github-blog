import { Link } from '../../../components/Link'
import { Building, Github, UserFriends } from '../../../styles/icons'
import { Container, Details, FooterItem } from './styles'

export function Profile() {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/67557314?v=4"
        alt="Avatar"
      />
      <Details>
        <header>
          <strong>Lucas Claython</strong>
          <Link text="GitHub" />
        </header>
        <main>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </main>
        <footer>
          <FooterItem>
            <Github />
            <span>Lorem Ipsum</span>
          </FooterItem>
          <FooterItem>
            <Building />
            <span>Lorem Ipsum</span>
          </FooterItem>
          <FooterItem>
            <UserFriends />
            <span>Lorem Ipsum</span>
          </FooterItem>
        </footer>
      </Details>
    </Container>
  )
}
